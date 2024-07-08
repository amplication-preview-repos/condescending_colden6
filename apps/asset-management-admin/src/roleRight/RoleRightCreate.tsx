import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RoleTitle } from "../role/RoleTitle";
import { RightTitle } from "../right/RightTitle";

export const RoleRightCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <ReferenceInput source="right.id" reference="Right" label="Right">
          <SelectInput optionText={RightTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
