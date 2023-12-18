import verifyAxiosErrorMessage from "@/helpers/verify-axios-error-message";
import { RegisterForm } from "@/schemas/registerSchema/types";
import { api } from "@/settings/api/axios";
import { routesAPIAuth } from "@/settings/api/routes/auth";
import { UserPublic } from "@/types/user";

interface RegisterFinalForm extends RegisterForm {
  username: string;
}

interface RegisterService {
  user: UserPublic | null;
  registered: boolean;
  message: string;
}

export const registerService = async (
  form: RegisterFinalForm
): Promise<RegisterService> => {
  try {
    const { data } = await api.post<UserPublic>(routesAPIAuth.REGISTER, form);

    return {
      user: data,
      registered: true,
      message: `Welcome ${data.name}! Your registration was successful!`,
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        verifyAxiosErrorMessage(error) ||
        "An internal server error occurred while registering! please try again.",
      registered: false,
      user: null,
    };
  }
};
