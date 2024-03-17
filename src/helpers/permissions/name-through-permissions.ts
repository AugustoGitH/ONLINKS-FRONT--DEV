import { groupPermissionAll } from "@/settings/permissions/groups";
import { Permission } from "@/settings/permissions/types";

const nameThroughPermissions = (permissions: Permission[]) => {
  const types = {
    superAdmin: [
      "super-admin",
      permissions.every((p) => groupPermissionAll.includes(p)),
    ],
    blockedUser: ["Usuário bloqueado", permissions.length === 0],
  };

  return Object.entries(types).find(([label, isValid]) => isValid)?.[1][0];
};

export default nameThroughPermissions;
