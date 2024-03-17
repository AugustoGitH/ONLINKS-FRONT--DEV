import { groupPermissionLimitLinkPageCreation } from "@/settings/permissions/groups";
import { limitsCreationPageLink } from "@/settings/permissions/limits";
import {
  Permission,
  PermissionRoutesLimitLinkPageCreation,
} from "@/settings/permissions/types";

const calculateLinkPageCountPermissions = (permissions: Permission[]) => {
  const permissionsLimitLinks = permissions.filter((permission) => {
    return groupPermissionLimitLinkPageCreation.includes(
      permission as PermissionRoutesLimitLinkPageCreation
    );
  });

  const permissionsFormattedQuantity = permissionsLimitLinks.map(
    (permission) => {
      return limitsCreationPageLink[
        permission as PermissionRoutesLimitLinkPageCreation
      ];
    }
  );

  const max = permissionsFormattedQuantity.includes(-666)
    ? Infinity
    : Math.max(...permissionsFormattedQuantity);

  return max;
};

export default calculateLinkPageCountPermissions;
