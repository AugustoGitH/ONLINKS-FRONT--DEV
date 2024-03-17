import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import { LinkPagePublic } from "@/types/link-page";
interface DeleteLinkPageRestrictService {
  message: string;
  linkPage: LinkPagePublic | null;
  deleted: boolean;
}
const deleteLinkPageRestrictService = async (
  linkPageId: string
): Promise<DeleteLinkPageRestrictService> => {
  try {
    const { data } = await api.delete<LinkPagePublic>(
      routesAPILinkPage.getDeleteRestrict(linkPageId)
    );
    return {
      deleted: true,
      linkPage: data,
      message: "Link page deleted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred when delete link Page!",
      deleted: false,
      linkPage: null,
    };
  }
};

export default deleteLinkPageRestrictService;
