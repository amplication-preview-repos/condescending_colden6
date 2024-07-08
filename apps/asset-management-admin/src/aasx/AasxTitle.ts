import { Aasx as TAasx } from "../api/aasx/Aasx";

export const AASX_TITLE_FIELD = "id";

export const AasxTitle = (record: TAasx): string => {
  return record.id?.toString() || String(record.id);
};
