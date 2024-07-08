import { RoleRightCreateNestedManyWithoutRightsInput } from "./RoleRightCreateNestedManyWithoutRightsInput";

export type RightCreateInput = {
  name?: string | null;
  description?: string | null;
  roleRights?: RoleRightCreateNestedManyWithoutRightsInput;
};
