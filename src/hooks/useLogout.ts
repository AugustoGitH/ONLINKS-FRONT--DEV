import { logoutService } from "@/services/auth/logoutService";
import { queryKeysAPIAuth } from "@/settings/api/query-keys/auth";
import { navigationRoutes } from "@/settings/navigation/routes";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const useLogout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleToggleShowDialog = () => setShowDialog((prev) => !prev);

  const clearQueries = () => {
    queryClient.resetQueries([queryKeysAPIAuth.CURRENT_USER]);
    queryClient.removeQueries([queryKeysAPIAuth.CURRENT_USER]);
  };

  const handleLogout = async () => {
    setIsLoggedOut(true);
    const { loggedOut, message } = await logoutService();
    setIsLoggedOut(false);
    if (loggedOut) {
      toast.success(message);
      clearQueries();
      await router.push(navigationRoutes.home.route);
      return;
    }
    toast.error(message);
  };

  return {
    handleLogout,
    isLoggedOut,
    handleToggleShowDialog,
    showDialog,
  };
};
