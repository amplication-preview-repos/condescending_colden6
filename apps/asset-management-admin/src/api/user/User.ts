import { JsonValue } from "type-fest";
import { UserRole } from "../userRole/UserRole";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userRoles?: Array<UserRole>;
};
