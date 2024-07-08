import { Asset } from "../asset/Asset";
import { HierarchyLevel } from "../hierarchyLevel/HierarchyLevel";

export type AssetHierarchy = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  assets?: Array<Asset>;
  parent: string | null;
  hierarchyLevel?: HierarchyLevel | null;
};
