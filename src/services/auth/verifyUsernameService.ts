import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPIAuth } from "@/settings/api/routes/auth";
import { AxiosError } from "axios";

interface VerifyUsernameService {
  message: string;
  found: boolean | null;
  error: boolean;
}

interface ResponseAPI {
  found: boolean;
}

export const verifyUsernameService = async (
  username: string
): Promise<VerifyUsernameService> => {
  try {
    const { data } = await api.get<ResponseAPI>(
      routesAPIAuth.verifyUsername(username)
    );

    return {
      message: "Username successfully verified!",
      found: data.found,
      error: false,
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred when checking username!",
      found: null,
      error: true,
    };
  }
};
