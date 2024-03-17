import { capitalizeName } from "./capitalize-name";

const tratedName = (name: string, type?: "started") => {
  let nameCapitalize = capitalizeName(name);
  if (type === "started") {
    nameCapitalize = nameCapitalize.split(" ")[0];
  }
  return nameCapitalize;
};

export default tratedName;
