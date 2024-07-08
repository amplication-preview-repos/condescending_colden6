import { Role } from "../role/Role";
import { Right } from "../right/Right";

export type RoleRight = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  role?: Role | null;
  right?: Right | null;
};
