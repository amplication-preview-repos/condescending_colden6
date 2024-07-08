import { RoleRightUpdateManyWithoutRolesInput } from "./RoleRightUpdateManyWithoutRolesInput";
import { UserRoleUpdateManyWithoutRolesInput } from "./UserRoleUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  description?: string | null;
  roleRights?: RoleRightUpdateManyWithoutRolesInput;
  userRoles?: UserRoleUpdateManyWithoutRolesInput;
};
