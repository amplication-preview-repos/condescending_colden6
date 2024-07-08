import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { RightWhereUniqueInput } from "../right/RightWhereUniqueInput";

export type RoleRightUpdateInput = {
  role?: RoleWhereUniqueInput | null;
  right?: RightWhereUniqueInput | null;
};
