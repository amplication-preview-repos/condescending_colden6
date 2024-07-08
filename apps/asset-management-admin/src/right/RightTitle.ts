import { Right as TRight } from "../api/right/Right";

export const RIGHT_TITLE_FIELD = "name";

export const RightTitle = (record: TRight): string => {
  return record.name?.toString() || String(record.id);
};
