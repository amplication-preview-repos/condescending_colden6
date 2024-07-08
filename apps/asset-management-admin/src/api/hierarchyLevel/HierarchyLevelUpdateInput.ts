import { AssetHierarchyUpdateManyWithoutHierarchyLevelsInput } from "./AssetHierarchyUpdateManyWithoutHierarchyLevelsInput";

export type HierarchyLevelUpdateInput = {
  levelName?: string | null;
  description?: string | null;
  assetHierarchies?: AssetHierarchyUpdateManyWithoutHierarchyLevelsInput;
};
