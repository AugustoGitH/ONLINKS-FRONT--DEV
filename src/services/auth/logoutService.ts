import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { api } from "@/settings/api/axios";
import { routesAPIAuth } from "@/settings/api/routes/auth";

interface LogoutService {
  loggedOut: boolean;
  message: string;
}

export const logoutService = async (): Promise<LogoutService> => {
  try {
    await api.get(routesAPIAuth.LOGOUT);

    return {
      loggedOut: true,
      message: "Logout was successful!",
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred during logout! Please try again.",
      loggedOut: false,
    };
  }
};
