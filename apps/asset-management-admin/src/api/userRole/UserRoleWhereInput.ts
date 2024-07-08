import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserRoleWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  role?: RoleWhereUniqueInput;
};
