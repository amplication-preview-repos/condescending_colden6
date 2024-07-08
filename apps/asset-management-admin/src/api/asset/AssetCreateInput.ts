import { AssetHierarchyWhereUniqueInput } from "../assetHierarchy/AssetHierarchyWhereUniqueInput";
import { AasxCreateNestedManyWithoutAssetsInput } from "./AasxCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  description?: string | null;
  name?: string | null;
  assetHierarchy?: AssetHierarchyWhereUniqueInput | null;
  aasxes?: AasxCreateNestedManyWithoutAssetsInput;
};
