import { ValueLinkPageInput } from "@/components/LinkPageInput/types";
import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import { CreateLinkPage, LinkPagePublic } from "@/types/link-page";
import createLinkPageService from "./createLinkPageService";
import { CreateLink, Link } from "@/types/link";
import createLinkService from "../link/createLinkService";
interface CreateLinkPageAndLinksService {
  message: string;
  linkPage: LinkPagePublic | null;
  links: Link[] | null;
  created: boolean;
}

const createLinks = async (links: CreateLink[]) => {
  return await Promise.all(links.map(createLinkService));
};

const createLinkPageAndLinksService = async (
  linkPage: CreateLinkPage,
  links: CreateLink[]
): Promise<CreateLinkPageAndLinksService> => {
  try {
    const {
      created,
      linkPage: linkPageCreated,
      message,
    } = await createLinkPageService({
      isDefault: linkPage.isDefault,
      title: linkPage.title!,
      banner: linkPage.banner,
      description: linkPage.description ?? undefined,
      profile: linkPage.profile,
      subTitle: linkPage.subTitle ?? undefined,
    });

    if (created && linkPageCreated) {
      if (links.length === 0) {
        return {
          created: true,
          linkPage: linkPageCreated,
          links: [],
          message: "Link page created successfully",
        };
      }

      const results = await createLinks(links);
    } else {
    }

    return {
      created: true,
      linkPage: data,
      message: "Link page created successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred when create link Page!",
      created: false,
      linkPage: null,
    };
  }
};

export default createLinkPageAndLinksService;
