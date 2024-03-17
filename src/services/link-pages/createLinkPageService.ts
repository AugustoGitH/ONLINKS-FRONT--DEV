import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import { CreateLinkPage, LinkPagePublic } from "@/types/link-page";
interface CreateLinkPageService {
  message: string;
  linkPage: LinkPagePublic | null;
  created: boolean;
}
const createLinkPageService = async (
  linkPage: CreateLinkPage
): Promise<CreateLinkPageService> => {
  try {
    const { data } = await api.post<LinkPagePublic>(
      routesAPILinkPage.CREATE,
      linkPage
    );
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

export default createLinkPageService;
