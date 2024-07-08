import { RoleRight as TRoleRight } from "../api/roleRight/RoleRight";

export const ROLERIGHT_TITLE_FIELD = "id";

export const RoleRightTitle = (record: TRoleRight): string => {
  return record.id?.toString() || String(record.id);
};
