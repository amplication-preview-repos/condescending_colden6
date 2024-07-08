import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { RightWhereUniqueInput } from "../right/RightWhereUniqueInput";

export type RoleRightWhereInput = {
  id?: StringFilter;
  role?: RoleWhereUniqueInput;
  right?: RightWhereUniqueInput;
};
