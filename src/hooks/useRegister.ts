import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/registerSchema";
import { RegisterForm } from "@/schemas/registerSchema/types";
import { registerService } from "@/services/auth/registerService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { navigationRoutes } from "@/settings/navigation/routes";

export const useRegister = ({ username }: { username: string }) => {
  const [registering, setRegistering] = useState(false);

  const {
    register: registerInput,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const router = useRouter();

  const handleRegister = async (form: RegisterForm) => {
    const finalForm = { ...form, username };
    setRegistering(true);
    const { message, registered, user } = await registerService(finalForm);
    setRegistering(false);
    if (registered) {
      toast.success(message);
      await router.push(navigationRoutes.panel.route);
      reset();
      return;
    }
    toast.error(message);
  };

  const onSubmit = handleSubmit(handleRegister);

  return { onSubmit, registerInput, registering, errors };
};
