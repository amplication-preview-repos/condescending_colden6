import { AppUser as TAppUser } from "../api/appUser/AppUser";

export const APPUSER_TITLE_FIELD = "password";

export const AppUserTitle = (record: TAppUser): string => {
  return record.password?.toString() || String(record.id);
};
