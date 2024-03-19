import {
  ErrorsLinkPage,
  ValueLinkInput,
  ValueLinkPageInput,
} from "@/components/LinkPageInput/types";

import calculateLinkPageCountPermissions from "@/helpers/permissions/calculate-linkPage-count-permissions";
import deleteLinkPageRestrictService from "@/services/link-pages/deleteLinkPageRestrictService";
import useLinkPagesStore from "@/stores/link-pages/useLinkPagesStore";

import { UserPublic } from "@/types/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

import { isValidLinkPage, schemaLinkPageFields } from "../schemas";
import convertLinkPageInStoreToNativeLinkPage from "../conversions/convertLinkPageInStoreToNativeLinkPage";
import processAndUpdateLinkPage from "../processes/processAndUpdateLinkPage";
import processAndCreateLinkPage from "../processes/processAndCreateLinkPage";
import { useAuthContext } from "@/contexts/AuthContext";
import validationLinks from "../validations/validationLinks";
interface DialogDeleteLinkPage {
  show: boolean;
  linkPageId: string | null;
}
const linkPageReset = ({
  isDefault,
  order,
}: {
  isDefault: boolean;
  order: number;
}) => ({
  banner: null,
  description: null,
  isDefault,
  links: null,
  profile: null,
  subTitle: null,
  title: null,
  order,
});
const useLinkPagesPanel = () => {
  const { user } = useAuthContext();
  const [
    linkPagesInStore,
    addLinkPageInStore,
    deleteLinkPageInStore,
    updateLinkPageInStore,
  ] = useLinkPagesStore((state) => [
    state.linkPages,
    state.addLinkPage,
    state.deleteLinkPage,
    state.updateLinkPage,
  ]);

  const [errors, setErrors] = useState<Record<string, ErrorsLinkPage>>({});
  const [linkPageInputs, setLinkPageInputs] = useState<
    Record<string, ValueLinkPageInput>
  >({});
  const [dialogDeleteLinkPage, setDialogDeleteLinkPage] =
    useState<DialogDeleteLinkPage>({
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
    const linkPagesTrated = linkPagesInStore
      ? convertLinkPageInStoreToNativeLinkPage<
          Record<string, ValueLinkPageInput>
        >(linkPagesInStore)
      : null;
    const quantityLinkPages =
      linkPageInputs && Object.keys(linkPageInputs).length;
    const quantityLinkPagesInStore =
      linkPagesTrated && Object.keys(linkPagesTrated).length;
    if (
      linkPagesTrated &&
      (quantityLinkPages === quantityLinkPagesInStore ||
        quantityLinkPages === 0)
    ) {
      setLinkPageInputs(linkPagesTrated);
    }
  }, [linkPagesInStore]);

  const isLimitLinkPages = linkPageInputs
    ? Object.keys(linkPageInputs).length + 1 <=
      calculateLinkPageCountPermissions(user!.permissions)
    : null;

  const changeLinkPage = (id: string, value: ValueLinkPageInput) => {
    const errors = isValidLinkPage(schemaLinkPageFields(value));
    const errorsLink = value.links ? validationLinks(value.links) : null;
    changeErrors(id, {
      ...errors,
      links: errorsLink,
    });

    setLinkPageInputs((prevLinkPages) => ({
      ...prevLinkPages,
      [id]: {
        ...prevLinkPages[id],
        ...value,
      },
    }));
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

    const linkPageInStore = linkPagesInStore?.find(
      (linkPage) => linkPage._id === linkPageId
    );

    const isUpdated = !!linkPageInStore;
    const isValid = Object.keys(errors).length === 0 && !errorsLink;

    if (isValid && isUpdated) {
      const {
        linkPage: linkPageUpdated,
        links,
        updated,
      } = await processAndUpdateLinkPage(
        linkPageId,
        linkPage,
        linkPageInStore?.links
      );
      updateLinkPageInStore;
      if (updated && links.notUpdated.length === 0 && linkPageUpdated) {
        updateLinkPageInStore(linkPageId, {
          ...linkPageUpdated,
          links: links.updated,
        });

        return true;
      }
    }
    if (isValid && !isUpdated) {
      const {
        linkPage: linkPageCreated,
        links,
        created,
      } = await processAndCreateLinkPage(linkPage);
      if (created && links.notCreated.length === 0 && linkPageCreated) {
        addLinkPageInStore({
          ...linkPageCreated,
          links: links.created,
        });

        return true;
      }
    }

    return false;
  };

  const cancelLinkPage = async (
    linkPageId: string,
    linkPage?: ValueLinkPageInput
  ) => {
    const linkPageStore = linkPagesInStore?.find(
      (linkPage) => linkPage._id === linkPageId
    );
    if (!linkPageStore) {
      resetOrAddLinkPage(linkPageId);
      changeErrors(linkPageId, {});
      return true;
    }

    setLinkPageInputs((prevLinkPages) => ({
      ...prevLinkPages,
      [linkPageId]: convertLinkPageInStoreToNativeLinkPage(linkPageStore),
    }));

    return true;
  };

  const resetOrAddLinkPage = (linkPageId: string) => {
    setLinkPageInputs((prevLinkPages) => {
      const quantityLinkPages = Object.keys(prevLinkPages).length;
      return {
        ...prevLinkPages,
        [linkPageId]: linkPageReset({
          order: quantityLinkPages + 1,
          isDefault: quantityLinkPages + 1 === 1,
        }),
      };
    });
  };

  const addLinkPage = () => {
    resetOrAddLinkPage(uuid());
  };

  const deleteLinkPage = async (id?: string) => {
    const linkPageId = id ?? dialogDeleteLinkPage.linkPageId;
    if (!linkPageId) return;
    const linkPageIsInStore = !!linkPagesInStore?.find(
      (linkPage) => linkPage._id === linkPageId
    );
    if (!linkPageIsInStore) {
      setLinkPageInputs((prevLinkPages) => {
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
      setLinkPageInputs((prevLinkPages) => {
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
    setLinkPageInputs((prevLinksPage) => {
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
          order: 1,
        },
      };
    });
  };

  return {
    linkPageInputs,
    isLimitLinkPages,
    assignDefaultLinkPage,
    deleteLinkPage,
    changeLinkPage,
    addLinkPage,
    saveLinkPage,
    errors,
    dialogDeleteLinkPage,
    handleToggleShowDialogDeleteLinkPage,
    cancelLinkPage,
  };
};

export default useLinkPagesPanel;
