import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleRightListRelationFilter } from "../roleRight/RoleRightListRelationFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  roleRights?: RoleRightListRelationFilter;
  userRoles?: UserRoleListRelationFilter;
};
