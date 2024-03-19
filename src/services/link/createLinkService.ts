import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPILink } from "@/settings/api/routes/link";
import { CreateLink, Link } from "@/types/link";

export interface CreateLinkService {
  message: string;
  link: Link | null;
  created: boolean;
}
const createLinkService = async (
  link: CreateLink
): Promise<CreateLinkService> => {
  try {
    const { data } = await api.post<Link>(routesAPILink.CREATE, link);
    return {
      created: true,
      link: data,
      message: "Link created successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred when create link!",
      created: false,
      link: null,
    };
  }
};

export default createLinkService;
