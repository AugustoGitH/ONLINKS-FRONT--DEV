import { capitalizeName } from "./capitalize-name";

export const formatNameShortLines = (name: string) => {
  const [firstName] = name.trim().split(" ");
  name = firstName.toLowerCase();
  name = capitalizeName(firstName);
  return name;
};
