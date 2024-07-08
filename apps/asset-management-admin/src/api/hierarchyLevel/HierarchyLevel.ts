import { AssetHierarchy } from "../assetHierarchy/AssetHierarchy";

export type HierarchyLevel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  levelName: string | null;
  description: string | null;
  assetHierarchies?: Array<AssetHierarchy>;
};
