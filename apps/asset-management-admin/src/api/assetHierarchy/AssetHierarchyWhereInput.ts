import { StringFilter } from "../../util/StringFilter";
import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HierarchyLevelWhereUniqueInput } from "../hierarchyLevel/HierarchyLevelWhereUniqueInput";

export type AssetHierarchyWhereInput = {
  id?: StringFilter;
  assets?: AssetListRelationFilter;
  parent?: StringNullableFilter;
  hierarchyLevel?: HierarchyLevelWhereUniqueInput;
};
