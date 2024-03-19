import { ValueLinkPageInput } from "@/components/LinkPageInput/types";
import { extractBase64FromFileAsync } from "@/helpers/extract-base64-from-file";
import updateLinkPageAndLinksRestrictService from "@/services/link-pages/updateLinkPageAndLinksRestrictService";
import { Link } from "@/types/link";
import { UpdateLinkPage } from "@/types/link-page";
import { toast } from "react-toastify";

const processAndUpdateLinkPage = async (
  linkPageId: string,
  linkPageInput: ValueLinkPageInput,
  linksInStore: Link[] | null
) => {
  const bannerInBase64 =
    typeof linkPageInput.banner !== "string"
      ? await extractBase64FromFileAsync(linkPageInput.banner as File)
      : linkPageInput.banner;

  const profileInBase64 =
    typeof linkPageInput.profile !== "string"
      ? await extractBase64FromFileAsync(linkPageInput.profile as File)
      : linkPageInput.profile;

  const linkPageTrated: UpdateLinkPage = {
    isDefault: linkPageInput.isDefault,
    order: linkPageInput.order,
    title: linkPageInput.title!,
    banner: bannerInBase64,
    description: linkPageInput.description ?? undefined,
    profile: profileInBase64,
    subTitle: linkPageInput.subTitle!,
  };

  const linksTrated = linkPageInput.links
    ? Object.entries(linkPageInput.links).map(([id, link]) => ({
        _id: id,
        isToCreate: !linksInStore?.find((link) => link._id === id),
        link: {
          href: link.href,
          icon: link.icon?.join(",") ?? null,
          linkPageId,
          title: link.title,
          order: link.order,
        },
      }))
    : [];

  const {
    updated,
    linkPage: linkPageUpdated,
    links,
    message,
  } = await updateLinkPageAndLinksRestrictService(
    {
      _id: linkPageId,
      linkPage: linkPageTrated,
    },
    linksTrated
  );
  if (updated && links.notUpdated.length === 0) {
    toast.success(message);
    return {
      updated,
      linkPage: linkPageUpdated,
      links,
    };
  }
  if (updated && links.notUpdated.length > 0) {
    toast.error(links.notUpdated[0].message);
    return {
      updated,
      linkPage: linkPageUpdated,
      links,
    };
  }
  toast.error(message);

  return {
    updated,
    linkPage: linkPageUpdated,
    links,
  };
};

export default processAndUpdateLinkPage;
