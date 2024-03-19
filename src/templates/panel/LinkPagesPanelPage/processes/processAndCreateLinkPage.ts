import { ValueLinkPageInput } from "@/components/LinkPageInput/types";
import { extractBase64FromFileAsync } from "@/helpers/extract-base64-from-file";
import createLinkPageAndLinksService from "@/services/link-pages/createLinkPageAndLinksService";
import { CreateLink } from "@/types/link";
import { CreateLinkPage } from "@/types/link-page";
import { toast } from "react-toastify";

const processAndCreateLinkPage = async (linkPage: ValueLinkPageInput) => {
  const [bannerInBase64, profileInBase64] = await Promise.all([
    extractBase64FromFileAsync(linkPage.banner as File),
    extractBase64FromFileAsync(linkPage.profile as File),
  ]);

  const linkPageTrated: CreateLinkPage = {
    isDefault: linkPage.isDefault,
    order: linkPage.order,
    title: linkPage.title!,
    banner: bannerInBase64,
    description: linkPage.description ?? undefined,
    profile: profileInBase64,
    subTitle: linkPage.subTitle!,
  };

  const linksTrated = (linkPageId: string): CreateLink[] =>
    linkPage.links
      ? Object.entries(linkPage.links).map(([id, link]) => ({
          href: link.href,
          icon: link.icon?.join(",") ?? null,
          linkPageId,
          title: link.title,
          order: link.order,
        }))
      : [];
  const {
    created,
    linkPage: linkPageCreated,
    links,
    message,
  } = await createLinkPageAndLinksService(linkPageTrated, linksTrated);
  if (created && links.notCreated.length === 0) {
    toast.success(message);
    return {
      created,
      linkPage: linkPageCreated,
      links,
    };
  }
  if (created && links.notCreated.length > 0) {
    toast.error(links.notCreated[0].message);
    return {
      created,
      linkPage: linkPageCreated,
      links,
    };
  }
  toast.error(message);

  return {
    created,
    linkPage: linkPageCreated,
    links,
  };
};

export default processAndCreateLinkPage;
