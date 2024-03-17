import { LinkPagePublic } from "@/types/link-page";
import { LinkPageAndLinksPublic } from "@/types/link-page-and-links";
import { create } from "zustand";

interface LinkPagesStore {
  linkPages: LinkPageAndLinksPublic[] | null;
  setLinkPages: (linkPages: LinkPageAndLinksPublic[]) => void;
  addLinkPage: (linkPage: LinkPageAndLinksPublic) => void;
  deleteLinkPage: (linkPageId: string) => void;
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
  deleteLinkPage: (linkPageId) => {
    set((state) => ({
      linkPages:
        state.linkPages?.filter((linkPage) => linkPage._id !== linkPageId) ??
        null,
    }));
  },
}));

export default useLinkPagesStore;
