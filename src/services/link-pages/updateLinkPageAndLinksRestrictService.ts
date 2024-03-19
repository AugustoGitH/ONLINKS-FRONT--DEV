import { ValueLinkPageInput } from "@/components/LinkPageInput/types";
import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import {
  CreateLinkPage,
  LinkPagePublic,
  UpdateLinkPage,
} from "@/types/link-page";
import createLinkPageService from "./createLinkPageService";
import { CreateLink, Link, UpdateLink } from "@/types/link";
import createLinkService, {
  CreateLinkService,
} from "../link/createLinkService";
import updateLinkRestrictService, {
  UpdateLinkRestrictService,
} from "../link/updateLinkRestrictService";
import updateLinkPageRestrictService from "./updateLinkPageRestrictService";
import removePropsObject from "@/helpers/remove-props-object";
interface UpdateLinkPageAndLinksRestrictService {
  message: string;
  linkPage: LinkPagePublic | null;
  links: {
    updated: Link[];
    notUpdated: (UpdateLinkRestrictService | CreateLinkService)[];
  };
  updated: boolean;
}

interface UpdateLinkTrated {
  _id: string;
  link: UpdateLink | CreateLink;
  isToCreate: boolean;
}

interface UpdateLinkPageTrated {
  _id: string;
  linkPage: UpdateLinkPage;
}

const updateLinks = async (links: UpdateLinkTrated[]) => {
  return await Promise.all(
    links.map((link) =>
      link.isToCreate
        ? createLinkService(link.link as CreateLink)
        : updateLinkRestrictService(
            link._id,
            removePropsObject(link.link, "linkPageId")
          )
    )
  );
};

const updateLinkPageAndLinksRestrictService = async (
  linkPage: UpdateLinkPageTrated,
  links: UpdateLinkTrated[]
): Promise<UpdateLinkPageAndLinksRestrictService> => {
  const {
    updated,
    linkPage: linkPageUpdated,
    message,
  } = await updateLinkPageRestrictService(linkPage._id, linkPage.linkPage);

  if (updated && linkPageUpdated) {
    if (links.length === 0) {
      return {
        updated: true,
        linkPage: linkPageUpdated,
        links: {
          updated: [],
          notUpdated: [],
        },
        message: "Link page updated successfully",
      };
    }

    const results = await updateLinks(links);

    return {
      updated: true,
      message: "Link page updated successfully",
      linkPage: linkPageUpdated,
      links: {
        updated: results
          .filter((link: any) =>
            link.updated === undefined ? link.created : link.updated
          )
          .map((link) => link.link!),
        notUpdated: results.filter((link: any) =>
          link.updated === undefined ? !link.created : !link.updated
        ),
      },
    };
  } else {
    return {
      updated: false,
      message,
      linkPage: null,
      links: {
        updated: [],
        notUpdated: [],
      },
    };
  }
};

export default updateLinkPageAndLinksRestrictService;
