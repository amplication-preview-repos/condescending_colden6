import { AssetHierarchyWhereUniqueInput } from "../assetHierarchy/AssetHierarchyWhereUniqueInput";
import { AasxUpdateManyWithoutAssetsInput } from "./AasxUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  description?: string | null;
  name?: string | null;
  assetHierarchy?: AssetHierarchyWhereUniqueInput | null;
  aasxes?: AasxUpdateManyWithoutAssetsInput;
};
