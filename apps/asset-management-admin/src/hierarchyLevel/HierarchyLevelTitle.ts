import { HierarchyLevel as THierarchyLevel } from "../api/hierarchyLevel/HierarchyLevel";

export const HIERARCHYLEVEL_TITLE_FIELD = "levelName";

export const HierarchyLevelTitle = (record: THierarchyLevel): string => {
  return record.levelName?.toString() || String(record.id);
};
