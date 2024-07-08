import { RoleRightCreateNestedManyWithoutRolesInput } from "./RoleRightCreateNestedManyWithoutRolesInput";
import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  description?: string | null;
  roleRights?: RoleRightCreateNestedManyWithoutRolesInput;
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
};
