import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { RightWhereUniqueInput } from "../right/RightWhereUniqueInput";

export type RoleRightCreateInput = {
  role?: RoleWhereUniqueInput | null;
  right?: RightWhereUniqueInput | null;
};
