import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RoleTitle } from "../role/RoleTitle";
import { RightTitle } from "../right/RightTitle";

export const RoleRightEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <ReferenceInput source="right.id" reference="Right" label="Right">
          <SelectInput optionText={RightTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
