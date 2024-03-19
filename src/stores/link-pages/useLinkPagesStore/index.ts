import { LinkPagePublic } from "@/types/link-page";
import { LinkPageAndLinksPublic } from "@/types/link-page-and-links";
import { create } from "zustand";

interface LinkPagesStore {
  linkPages: LinkPageAndLinksPublic[] | null;
  setLinkPages: (linkPages: LinkPageAndLinksPublic[]) => void;
  addLinkPage: (linkPage: LinkPageAndLinksPublic) => void;
  deleteLinkPage: (linkPageId: string) => void;
  updateLinkPage: (
    linkPageId: string,
    linkPage: LinkPageAndLinksPublic
  ) => void;
}

const useLinkPagesStore = create<LinkPagesStore>((set) => ({
  linkPages: null,
  setLinkPages: (linkPages) => {
    set({
      linkPages,
    });
  },
  addLinkPage: (linkPage) => {
    set((state) => ({
      linkPages: [...(state.linkPages ?? []), linkPage],
    }));
  },
  updateLinkPage: (linkPageId, linkPage) => {
    set((state) => {
      const { linkPages } = state;
      if (!linkPages) return {};
      const indexLinkPage =
        linkPages.findIndex((linkPage) => linkPage._id === linkPageId) ?? null;
      if (indexLinkPage === -1) return {};
      linkPages[indexLinkPage] = {
        ...linkPages[indexLinkPage],
        ...linkPage,
      };
      return {
        linkPages,
      };
    });
  },
  deleteLinkPage: (linkPageId) => {
    set((state) => ({
      linkPages:
        state.linkPages?.filter((linkPage) => linkPage._id !== linkPageId) ??
        null,
    }));
  },
}));

export default useLinkPagesStore;
