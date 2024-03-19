import {
  ErrorsLinkPage,
  ValueLinkInput,
} from "@/components/LinkPageInput/types";
import { isValidLinkPage, schemaLinkPageLink } from "../schemas";

const validationLinks = (links: Record<string, ValueLinkInput>) => {
  const linksErrorEntries = Object.entries(links).filter(
    ([, link]) =>
      Object.keys(isValidLinkPage(schemaLinkPageLink(link))).length !== 0
  );
  if (linksErrorEntries.length === 0) return null;

  return Object.fromEntries(
    linksErrorEntries.map(([id, link]) => {
      const errors = isValidLinkPage(schemaLinkPageLink(link));
      return [
        id,
        errors[Object.keys(errors)[0] as keyof Omit<ErrorsLinkPage, "links">],
      ];
    })
  );
};

export default validationLinks;
