import {
  ValueLinkInput,
  ValueLinkPageInput,
} from "@/components/LinkPageInput/types";
import { LinkPageAndLinksPublic } from "@/types/link-page-and-links";

const convertLinkPageInStoreToNativeLinkPage = <
  TLinkPage extends ValueLinkPageInput | Record<string, ValueLinkPageInput>
>(
  linkPages: LinkPageAndLinksPublic | LinkPageAndLinksPublic[]
): TLinkPage => {
  const convertLinkPage = (linkPage: LinkPageAndLinksPublic) =>
    ({
      banner: linkPage.banner,
      description: linkPage.description,
      isDefault: linkPage.isDefault,
      profile: linkPage.profile,
      subTitle: linkPage.subTitle,
      order: linkPage.order,
      title: linkPage.title,
      links: Object.fromEntries(
        linkPage.links.map((link) => [
          link._id,
          {
            href: link.href,
            icon: link.icon?.split(","),
            order: link.order,
            title: link.title,
          } as ValueLinkInput,
        ])
      ),
    } as ValueLinkPageInput);
  if (Array.isArray(linkPages)) {
    return Object.fromEntries(
      linkPages.map((linkPage) => [linkPage._id, convertLinkPage(linkPage)])
    ) as TLinkPage;
  }

  return convertLinkPage(linkPages) as TLinkPage;
};
export default convertLinkPageInStoreToNativeLinkPage;
