import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssetHierarchyListRelationFilter } from "../assetHierarchy/AssetHierarchyListRelationFilter";

export type HierarchyLevelWhereInput = {
  id?: StringFilter;
  levelName?: StringNullableFilter;
  description?: StringNullableFilter;
  assetHierarchies?: AssetHierarchyListRelationFilter;
};
