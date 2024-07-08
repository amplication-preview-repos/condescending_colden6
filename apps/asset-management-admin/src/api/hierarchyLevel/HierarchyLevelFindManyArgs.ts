import { HierarchyLevelWhereInput } from "./HierarchyLevelWhereInput";
import { HierarchyLevelOrderByInput } from "./HierarchyLevelOrderByInput";

export type HierarchyLevelFindManyArgs = {
  where?: HierarchyLevelWhereInput;
  orderBy?: Array<HierarchyLevelOrderByInput>;
  skip?: number;
  take?: number;
};
