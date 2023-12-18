import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { LoginForm } from "@/schemas/loginSchema/types";
import { RegisterForm } from "@/schemas/registerSchema/types";
import { api } from "@/settings/api/axios";
import { routesAPIAuth } from "@/settings/api/routes/auth";
import { UserPublic } from "@/types/user";

interface LoginService {
  logged: boolean;
  message: string;
}

export const loginService = async (form: LoginForm): Promise<LoginService> => {
  try {
    const { data } = await api.post(routesAPIAuth.LOGIN, form);
    return {
      logged: true,
      message: `Welcome back! Your login was successful!`,
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred during login! Please try again.",
      logged: false,
    };
  }
};
