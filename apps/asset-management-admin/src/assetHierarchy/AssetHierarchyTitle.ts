import { AssetHierarchy as TAssetHierarchy } from "../api/assetHierarchy/AssetHierarchy";

export const ASSETHIERARCHY_TITLE_FIELD = "parent";

export const AssetHierarchyTitle = (record: TAssetHierarchy): string => {
  return record.parent?.toString() || String(record.id);
};
