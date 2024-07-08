import { AssetHierarchyCreateNestedManyWithoutHierarchyLevelsInput } from "./AssetHierarchyCreateNestedManyWithoutHierarchyLevelsInput";

export type HierarchyLevelCreateInput = {
  levelName?: string | null;
  description?: string | null;
  assetHierarchies?: AssetHierarchyCreateNestedManyWithoutHierarchyLevelsInput;
};
