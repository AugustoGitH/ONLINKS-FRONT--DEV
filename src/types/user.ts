import { Permission } from "@/settings/permissions/types";

export interface UserPublic {
  _id: string;
  username: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  permissions: Permission[];
}
