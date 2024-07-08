import { RoleRight } from "../roleRight/RoleRight";
import { UserRole } from "../userRole/UserRole";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  roleRights?: Array<RoleRight>;
  userRoles?: Array<UserRole>;
};
