import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  assetHierarchyId?: SortOrder;
};
