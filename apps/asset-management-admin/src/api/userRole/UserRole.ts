import { User } from "../user/User";
import { Role } from "../role/Role";

export type UserRole = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  role?: Role | null;
};
