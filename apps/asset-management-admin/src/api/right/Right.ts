import { RoleRight } from "../roleRight/RoleRight";

export type Right = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  roleRights?: Array<RoleRight>;
};
