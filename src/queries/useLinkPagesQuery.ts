import { api } from "@/settings/api/axios";
import { queryKeysAPILinkPage } from "@/settings/api/query-keys/link-page";
import { routesAPILink } from "@/settings/api/routes/link";
import { routesAPILinkPage } from "@/settings/api/routes/link-page";
import { Link } from "@/types/link";
import { LinkPagePublic } from "@/types/link-page";
import { LinkPageAndLinksPublic } from "@/types/link-page-and-links";
import { useQuery, useQueryClient } from "react-query";

const fetchLinkPagesAndLinks = async (
  restrict: boolean
): Promise<LinkPageAndLinksPublic[]> => {
  const { data } = await api.get<LinkPagePublic[]>(
    restrict ? routesAPILinkPage.GET_ALL_RESTRICT : routesAPILinkPage.GET_ALL
  );

  const linkPagesAndLinks: LinkPageAndLinksPublic[] = await Promise.all(
    data.map(async (linkPage) => ({
      ...linkPage,
      links: await fetchLinks(linkPage._id),
    }))
  );

  return linkPagesAndLinks;
};

const fetchLinks = async (linkPageId: string) => {
  const { data } = await api.get<Link[]>(
    routesAPILink.getAllRestrict(linkPageId)
  );
  return data;
};

interface UseLinkPageQuery {
  restrict?: boolean;
}

export const useLinkPagesAndLinksQuery = ({
  restrict = true,
}: UseLinkPageQuery = {}) => {
  return useQuery({
    queryFn: () => fetchLinkPagesAndLinks(restrict),
    queryKey: [queryKeysAPILinkPage.LINK_PAGES],
    staleTime: 3000,
  });
};
