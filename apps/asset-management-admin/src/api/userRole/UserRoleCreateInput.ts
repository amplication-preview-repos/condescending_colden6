import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserRoleCreateInput = {
  user?: UserWhereUniqueInput | null;
  role?: RoleWhereUniqueInput | null;
};
