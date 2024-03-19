import { ValueLinkPageInput } from "@/components/LinkPageInput/types";
import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import { CreateLinkPage, LinkPagePublic } from "@/types/link-page";
import createLinkPageService from "./createLinkPageService";
import { CreateLink, Link } from "@/types/link";
import createLinkService, {
  CreateLinkService,
} from "../link/createLinkService";
interface CreateLinkPageAndLinksService {
  message: string;
  linkPage: LinkPagePublic | null;
  links: {
    created: Link[];
    notCreated: CreateLinkService[];
  };
  created: boolean;
}

const createLinks = async (links: CreateLink[]) => {
  return await Promise.all(links.map(createLinkService));
};

const createLinkPageAndLinksService = async (
  linkPage: CreateLinkPage,
  links: (linkPageId: string) => CreateLink[]
): Promise<CreateLinkPageAndLinksService> => {
  const {
    created,
    linkPage: linkPageCreated,
    message,
  } = await createLinkPageService(linkPage);

  if (created && linkPageCreated) {
    if (links.length === 0) {
      return {
        created: true,
        linkPage: linkPageCreated,
        links: {
          created: [],
          notCreated: [],
        },
        message: "Link page created successfully",
      };
    }

    const results = await createLinks(links(linkPageCreated._id));

    return {
      created: true,
      message: "Link page created successfully",
      linkPage: linkPageCreated,
      links: {
        created: results
          .filter((link) => link.created)
          .map((link) => link.link!),
        notCreated: results.filter((link) => !link.created),
      },
    };
  } else {
    return {
      created: false,
      message,
      linkPage: null,
      links: {
        created: [],
        notCreated: [],
      },
    };
  }
};

export default createLinkPageAndLinksService;
