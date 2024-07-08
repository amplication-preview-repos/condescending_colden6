import { AssetHierarchyWhereInput } from "./AssetHierarchyWhereInput";
import { AssetHierarchyOrderByInput } from "./AssetHierarchyOrderByInput";

export type AssetHierarchyFindManyArgs = {
  where?: AssetHierarchyWhereInput;
  orderBy?: Array<AssetHierarchyOrderByInput>;
  skip?: number;
  take?: number;
};
