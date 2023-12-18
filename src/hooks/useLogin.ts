import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/registerSchema";
import { RegisterForm } from "@/schemas/registerSchema/types";
import { registerService } from "@/services/auth/registerService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { navigationRoutes } from "@/settings/navigation/routes";
import { loginSchema } from "@/schemas/loginSchema";
import { LoginForm } from "@/schemas/loginSchema/types";
import { loginService } from "@/services/auth/loginService";

export const useLogin = () => {
  const [loggingIn, setLoggingIn] = useState(false);

  const {
    register: registerInput,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const handleLogin = async (form: LoginForm) => {
    setLoggingIn(true);
    const { message, logged } = await loginService(form);
    setLoggingIn(false);
    if (logged) {
      toast.success(message);
      await router.push(navigationRoutes.panel.route);
      reset();
      return;
    }
    toast.error(message);
  };

  const onSubmit = handleSubmit(handleLogin);

  return { onSubmit, registerInput, loggingIn, errors };
};
