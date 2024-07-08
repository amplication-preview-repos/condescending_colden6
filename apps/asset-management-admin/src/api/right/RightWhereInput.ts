import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleRightListRelationFilter } from "../roleRight/RoleRightListRelationFilter";

export type RightWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  roleRights?: RoleRightListRelationFilter;
};
