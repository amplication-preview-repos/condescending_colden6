import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AppUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
