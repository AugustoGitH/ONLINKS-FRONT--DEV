import { api } from "@/settings/api/axios";
import { queryKeysAPILink } from "@/settings/api/query-keys/link";
import { queryKeysAPILinkPage } from "@/settings/api/query-keys/link-page";
import { routesAPILink } from "@/settings/api/routes/link";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import { LinkPagePublic } from "@/types/link-page";
import { useQuery } from "react-query";

interface UseLinksQuery {
  restrict?: boolean;
  linkPageId: string;
}

const fetchLinks = async ({ linkPageId, restrict }: UseLinksQuery) => {
  const { data } = await api.get<LinkPagePublic[]>(
    restrict
      ? routesAPILink.getAllRestrict(linkPageId)
      : routesAPILink.getAll(linkPageId)
  );

  return data;
};

export const useLinksQuery = ({ restrict = true, linkPageId }: UseLinksQuery) =>
  useQuery({
    queryFn: () => fetchLinks({ linkPageId, restrict }),
    queryKey: [queryKeysAPILink.getLinks(linkPageId)],
    staleTime: 3000,
  });
