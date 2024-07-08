import { SortOrder } from "../../util/SortOrder";

export type AssetHierarchyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  parent?: SortOrder;
  hierarchyLevelId?: SortOrder;
};
