import { AssetCreateNestedManyWithoutAssetHierarchiesInput } from "./AssetCreateNestedManyWithoutAssetHierarchiesInput";
import { HierarchyLevelWhereUniqueInput } from "../hierarchyLevel/HierarchyLevelWhereUniqueInput";

export type AssetHierarchyCreateInput = {
  assets?: AssetCreateNestedManyWithoutAssetHierarchiesInput;
  parent?: string | null;
  hierarchyLevel?: HierarchyLevelWhereUniqueInput | null;
};
