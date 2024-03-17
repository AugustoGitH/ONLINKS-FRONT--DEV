import * as z from "zod";

export const createLinkPageSchema = z.object({
  title: z
    .string()
    .nonempty("Titulo é obrigatorio!")
    .min(4, "O titulo deve conter no minimo 3 caracteres!")
    .max(200, "O titulo deve conter no máximo 200 caracteres!"),
  isDefault: z.boolean(),
  subTitle: z.string(),
  description: z.string(),
  profile: z.string(),
  banner: z.string(),
});
