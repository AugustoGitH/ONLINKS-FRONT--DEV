import {
  ErrorsLinkPage,
  ValueLinkInput,
  ValueLinkPageInput,
} from "@/components/LinkPageInput/types";
type Schema<T> = Partial<Record<keyof T, Array<[boolean, string]>>>;
export const isValidLinkPage = (
  schema: Schema<Record<string, any>>
): ErrorsLinkPage => {
  const errorEntries = Object.entries(schema)
    .filter(([, errors]) => errors?.some(([isV]) => isV))
    .map(([field, errors]) => [
      field,
      {
        message: errors?.find(([isVal]) => isVal)?.[1],
      },
    ]);

  const errorFromEntries = Object.fromEntries(errorEntries);

  return errorFromEntries;
};
export const schemaLinkPageFields = (
  linkPage: ValueLinkPageInput
): Schema<Omit<ValueLinkPageInput, "links">> => ({
  banner: [[!linkPage.banner, "A banner é requerida!"]],
  title: [
    [!linkPage.title, "O título é requerido!"],
    [
      !!linkPage.title && linkPage.title.length < 5,
      "O título deve conter no minimo 10 caracteres!",
    ],
  ],
  profile: [[!linkPage.profile, "O profile é requerido!"]],
  subTitle: [
    [!linkPage.subTitle, "O subtitulo é requerido!"],
    [
      !!linkPage.subTitle && linkPage.subTitle.length < 5,
      "O subtitulo deve conter no minimo 10 caracteres!",
    ],
  ],
});

export const schemaLinkPageLink = (
  link: ValueLinkInput
): Schema<ValueLinkInput> => ({
  href: [[!link.href, "O href é obrigátorio!"]],
  title: [[!link.title, "O titulo é obrigátorio!"]],
});
