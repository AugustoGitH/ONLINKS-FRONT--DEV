import { api } from "@/settings/api/axios";
import { queryKeysAPILinkPage } from "@/settings/api/query-keys/link-page";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import { LinkPagePublic } from "@/types/link-page";
import { useQuery } from "react-query";

const fetchLinkPages = async (restrict: boolean) => {
  const { data } = await api.get<LinkPagePublic[]>(
    restrict ? routesAPILinkPage.GET_ALL_RESTRICT : routesAPILinkPage.GET_ALL
  );

  return data;
};

interface UseLinkPageQuery {
  restrict?: boolean;
}

export const useLinkPagesQuery = ({ restrict = true }: UseLinkPageQuery = {}) =>
  useQuery({
    queryFn: () => fetchLinkPages(restrict),
    queryKey: [queryKeysAPILinkPage.LINK_PAGES],
    staleTime: 3000,
  });
