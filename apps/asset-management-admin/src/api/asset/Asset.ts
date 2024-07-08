import { AssetHierarchy } from "../assetHierarchy/AssetHierarchy";
import { Aasx } from "../aasx/Aasx";

export type Asset = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  assetHierarchy?: AssetHierarchy | null;
  aasxes?: Array<Aasx>;
};
