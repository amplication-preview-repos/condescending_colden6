import { RoleRightUpdateManyWithoutRightsInput } from "./RoleRightUpdateManyWithoutRightsInput";

export type RightUpdateInput = {
  name?: string | null;
  description?: string | null;
  roleRights?: RoleRightUpdateManyWithoutRightsInput;
};
