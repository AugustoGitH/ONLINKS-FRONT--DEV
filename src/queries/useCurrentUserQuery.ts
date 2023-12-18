import { api } from "@/settings/api/axios";
import { queryKeysAPIAuth } from "@/settings/api/query-keys/auth";
import { routesAPIAuth } from "@/settings/api/routes/auth";
import { UserPublic } from "@/types/user";
import { useQuery } from "react-query";

const fetchCurrentUser = async () => {
  const { data } = await api.get<UserPublic>(routesAPIAuth.CURRENT_USER);

  return data;
};

export const useCurrentUserQuery = () =>
  useQuery({
    queryFn: fetchCurrentUser,
    queryKey: [queryKeysAPIAuth.CURRENT_USER],
    staleTime: 3000,
  });
