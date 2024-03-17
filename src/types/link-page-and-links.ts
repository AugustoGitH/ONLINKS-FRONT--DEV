import { Link } from "./link";
import { LinkPagePublic } from "./link-page";

export interface LinkPageAndLinksPublic extends LinkPagePublic {
  links: Link[];
}
