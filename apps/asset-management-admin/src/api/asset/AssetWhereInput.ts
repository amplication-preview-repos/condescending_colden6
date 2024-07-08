import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssetHierarchyWhereUniqueInput } from "../assetHierarchy/AssetHierarchyWhereUniqueInput";
import { AasxListRelationFilter } from "../aasx/AasxListRelationFilter";

export type AssetWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  assetHierarchy?: AssetHierarchyWhereUniqueInput;
  aasxes?: AasxListRelationFilter;
};
