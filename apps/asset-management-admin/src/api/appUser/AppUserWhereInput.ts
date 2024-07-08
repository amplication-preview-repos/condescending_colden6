import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppUserWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
};
