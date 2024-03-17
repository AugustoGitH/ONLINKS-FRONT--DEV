import {
  ErrorsLinkPage,
  ValueLinkInput,
  ValueLinkPageInput,
} from "@/components/LinkPageInput/types";
import {
  extractBase64FromFile,
  extractBase64FromFileAsync,
} from "@/helpers/extract-base64-from-file";
import calculateLinkPageCountPermissions from "@/helpers/permissions/calculate-linkPage-count-permissions";
import { createLinkPageSchema } from "@/schemas/link-pages/createLinkPageSchema";
import createLinkPageService from "@/services/link-pages/createLinkPageService";
import deleteLinkPageRestrictService from "@/services/link-pages/deleteLinkPageRestrictService";
import createLinkService from "@/services/link/createLinkService";
import useLinkPagesStore from "@/stores/link-pages/useLinkPagesStore";

import { UserPublic } from "@/types/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { ZodError } from "zod";
import {
  isValidLinkPage,
  schemaLinkPageFields,
  schemaLinkPageLink,
} from "../schemas";

type Schema<T> = Partial<Record<keyof T, Array<[boolean, string]>>>;
const create = async (linkPage: ValueLinkPageInput) => {
  const [bannerInBase64, profileInBase64] = await Promise.all([
    extractBase64FromFileAsync(linkPage.banner as File),
    extractBase64FromFileAsync(linkPage.profile as File),
  ]);

  const {
    created,
    linkPage: linkPageCreated,
    message,
  } = await createLinkPageService({
    isDefault: linkPage.isDefault,
    title: linkPage.title!,
    banner: bannerInBase64,
    description: linkPage.description ?? undefined,
    profile: profileInBase64,
    subTitle: linkPage.subTitle ?? undefined,
  });

  if (created && linkPageCreated) {
    if (linkPage.links) {
      const resultsCreateLink = await Promise.all(
        Object.entries(linkPage.links).map(([id, link]) => {
          return createLinkService({
            href: link.href,
            icon: link.icon ? link.icon.join(",") : null,
            linkPageId: linkPageCreated._id,
            title: link.title,
          });
        })
      );

      const resultErrorCreateLink = resultsCreateLink.find(
        (result) => !result.created
      );

      if (resultErrorCreateLink) {
        toast.error(resultErrorCreateLink.message);

        return;
      } else {
        toast.success(message);
      }

      return;
    }
  } else {
    toast.error(message);
  }
};

const useLinkPagesPanel = (user: UserPublic | null) => {
  const [linkPagesInStore, addLinkPageInStore, deleteLinkPageInStore] =
    useLinkPagesStore((state) => [
      state.linkPages,
      state.addLinkPage,
      state.deleteLinkPage,
    ]);

  const [errors, setErrors] = useState<Record<string, ErrorsLinkPage>>({});
  const [linkPages, setLinkPages] = useState<
    Record<string, ValueLinkPageInput & { order: number }>
  >({});
  const [dialogDeleteLinkPage, setDialogDeleteLinkPage] = useState<{
    show: boolean;
    linkPageId: string | null;
  }>({
    show: false,
    linkPageId: null,
  });

  const handleToggleShowDialogDeleteLinkPage = (linkPageId?: string) => {
    setDialogDeleteLinkPage((prevDialog) => {
      const show = !prevDialog.show;
      return {
        show,
        linkPageId: show && linkPageId ? linkPageId : null,
      };
    });
  };

  useEffect(() => {
    const linkPagesTrated: Record<
      string,
      ValueLinkPageInput & { order: number }
    > | null = linkPagesInStore
      ? Object.fromEntries(
          linkPagesInStore.map((linkPage) => [
            linkPage._id,
            {
              banner: linkPage.banner,
              description: linkPage.description,
              isDefault: linkPage.isDefault,
              profile: linkPage.profile,
              subTitle: linkPage.subTitle,
              order: 1,
              title: linkPage.title,
              links: Object.fromEntries(
                linkPage.links.map((link) => [
                  link._id,
                  {
                    href: link.href,
                    icon: link.icon?.split(","),
                    order: 1,
                    title: link.title,
                  } as ValueLinkInput,
                ])
              ),
            } as ValueLinkPageInput & { order: number },
          ])
        )
      : null;
    if (linkPagesTrated) {
      setLinkPages(linkPagesTrated);
    }
  }, [linkPagesInStore]);

  const isLimitLinkPages = linkPages
    ? Object.keys(linkPages).length + 1 <=
      calculateLinkPageCountPermissions(user!.permissions)
    : null;

  const changeLinkPage = (id: string, value: ValueLinkPageInput) => {
    const errors = isValidLinkPage(schemaLinkPageFields(value));
    const errorsLink = value.links ? validationLinks(value.links) : null;
    changeErrors(id, {
      ...errors,
      links: errorsLink,
    });

    setLinkPages((prevLinkPages) => ({
      ...prevLinkPages,
      [id]: {
        ...prevLinkPages[id],
        ...value,
      },
    }));
  };

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

  const changeErrors = (linkPageId: string, errors: ErrorsLinkPage) => {
    setErrors((prevErrors) => ({ ...prevErrors, [linkPageId]: errors }));
  };

  const saveLinkPage = async (
    linkPageId: string,
    linkPage?: ValueLinkPageInput
  ): Promise<boolean> => {
    if (!linkPage) {
      changeErrors(linkPageId, {});
      return false;
    }
    const errors = isValidLinkPage(schemaLinkPageFields(linkPage));
    const errorsLink = linkPage.links ? validationLinks(linkPage.links) : null;
    changeErrors(linkPageId, {
      ...errors,
      links: errorsLink,
    });

    if (Object.keys(errors).length === 0 && !errorsLink) {
      create(linkPage);
      return true;
    }

    return false;
  };

  const addLinkPage = () => {
    setLinkPages((prevLinkPages) => {
      const quantityLinkPages = Object.keys(prevLinkPages).length;
      return {
        ...prevLinkPages,
        [uuid()]: {
          banner: null,
          description: null,
          isDefault: quantityLinkPages + 1 === 1,
          links: null,
          profile: null,
          subTitle: null,
          title: null,
          order: quantityLinkPages + 1,
        },
      };
    });
  };

  const deleteLinkPage = async (id?: string) => {
    const linkPageId = id ?? dialogDeleteLinkPage.linkPageId;
    if (!linkPageId) return;
    const linkPageIsInStore = !!linkPagesInStore?.find(
      (linkPage) => linkPage._id === linkPageId
    );
    if (!linkPageIsInStore) {
      setLinkPages((prevLinkPages) => {
        const { [linkPageId]: _, ...rest } = prevLinkPages;
        return rest;
      });
      handleToggleShowDialogDeleteLinkPage();
      return;
    }
    const { deleted, linkPage, message } = await deleteLinkPageRestrictService(
      linkPageId
    );
    if (deleted) {
      toast.success(message);
      setLinkPages((prevLinkPages) => {
        const { [linkPageId]: _, ...rest } = prevLinkPages;
        return rest;
      });
      deleteLinkPageInStore(linkPageId);
    } else {
      toast.error(message);
    }
    handleToggleShowDialogDeleteLinkPage();
  };

  const assignDefaultLinkPage = (id: string, state: boolean) => {
    setLinkPages((prevLinksPage) => {
      return {
        ...Object.fromEntries(
          Object.entries(prevLinksPage).map(([id, item]) => [
            id,
            { ...item, isDefault: false },
          ])
        ),
        [id]: {
          ...prevLinksPage[id],
          isDefault: true,
        },
      };
    });
  };

  return {
    linkPages,
    isLimitLinkPages,
    assignDefaultLinkPage,
    deleteLinkPage,
    changeLinkPage,
    addLinkPage,
    saveLinkPage,
    errors,
    dialogDeleteLinkPage,
    handleToggleShowDialogDeleteLinkPage,
  };
};

export default useLinkPagesPanel;
