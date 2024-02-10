import { groupPermissionLimitLinkCreation } from "@/settings/permissions/groups";
import { limitsCreationLink } from "@/settings/permissions/limits";
import {
  Permission,
  PermissionRoutesLimitLinkCreation,
} from "@/settings/permissions/types";

const calculateLinkCountPermissions = (permissions: Permission[]) => {
  const permissionsLimitLinks = permissions.filter((permission) => {
    return groupPermissionLimitLinkCreation.includes(
      permission as PermissionRoutesLimitLinkCreation
    );
  });

  const permissionsFormattedQuantity = permissionsLimitLinks.map(
    (permission) => {
      return limitsCreationLink[
        permission as PermissionRoutesLimitLinkCreation
      ];
    }
  );

  const max = permissionsFormattedQuantity.includes(-666)
    ? Infinity
    : Math.max(...permissionsFormattedQuantity);

  return max;
};

export default calculateLinkCountPermissions;
