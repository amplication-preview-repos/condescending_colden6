import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserRoleUpdateInput = {
  user?: UserWhereUniqueInput | null;
  role?: RoleWhereUniqueInput | null;
};
