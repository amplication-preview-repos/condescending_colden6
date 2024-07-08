import { SortOrder } from "../../util/SortOrder";

export type HierarchyLevelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  levelName?: SortOrder;
  description?: SortOrder;
};
