import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPILink } from "@/settings/api/routes/link";
import { CreateLink, Link, UpdateLink } from "@/types/link";

export interface UpdateLinkRestrictService {
  message: string;
  link: Link | null;
  updated: boolean;
}
const updateLinkRestrictService = async (
  linkId: string,
  link: UpdateLink
): Promise<UpdateLinkRestrictService> => {
  try {
    const { data } = await api.patch<Link>(
      routesAPILink.getUpdateLinkRestrict(linkId),
      link
    );
    return {
      updated: true,
      link: data,
      message: "Link updated successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred when update link!",
      updated: false,
      link: null,
    };
  }
};

export default updateLinkRestrictService;
