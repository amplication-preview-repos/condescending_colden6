import { AssetUpdateManyWithoutAssetHierarchiesInput } from "./AssetUpdateManyWithoutAssetHierarchiesInput";
import { HierarchyLevelWhereUniqueInput } from "../hierarchyLevel/HierarchyLevelWhereUniqueInput";

export type AssetHierarchyUpdateInput = {
  assets?: AssetUpdateManyWithoutAssetHierarchiesInput;
  parent?: string | null;
  hierarchyLevel?: HierarchyLevelWhereUniqueInput | null;
};
