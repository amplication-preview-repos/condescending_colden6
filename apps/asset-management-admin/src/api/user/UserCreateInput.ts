import { InputJsonValue } from "../../types";
import { UserRoleCreateNestedManyWithoutUsersInput } from "./UserRoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userRoles?: UserRoleCreateNestedManyWithoutUsersInput;
};
