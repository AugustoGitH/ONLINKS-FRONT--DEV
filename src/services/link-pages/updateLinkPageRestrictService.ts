import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import { UpdateLink } from "@/types/link";
import {
  CreateLinkPage,
  LinkPagePublic,
  UpdateLinkPage,
} from "@/types/link-page";
interface UpdateLinkPageRestrictService {
  message: string;
  linkPage: LinkPagePublic | null;
  updated: boolean;
}
const updateLinkPageRestrictService = async (
  linkPageId: string,
  linkPage: UpdateLinkPage
): Promise<UpdateLinkPageRestrictService> => {
  try {
    const { data } = await api.patch<LinkPagePublic>(
      routesAPILinkPage.getUpdateRestrict(linkPageId),
      linkPage
    );
    return {
      updated: true,
      linkPage: data,
      message: "Link page updated successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred when update link Page!",
      updated: false,
      linkPage: null,
    };
  }
};

export default updateLinkPageRestrictService;
