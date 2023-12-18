import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email é obrigatorio!")
    .email("Formato de email inválido!")
    .min(4, "O email deve conter no minimo 3 caracteres!")
    .max(200, "O email deve conter no máximo 200 caracteres!"),

  password: z
    .string()
    .nonempty("Senha é obrigatorio")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/,
      "A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um dígito, um caractere especial e ter pelo menos 6 caracteres."
    ),
});
