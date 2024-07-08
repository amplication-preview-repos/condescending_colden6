import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AssetHierarchyTitle } from "../assetHierarchy/AssetHierarchyTitle";
import { AasxTitle } from "../aasx/AasxTitle";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="assetHierarchy.id"
          reference="AssetHierarchy"
          label="AssetHierarchy"
        >
          <SelectInput optionText={AssetHierarchyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="aasxes"
          reference="Aasx"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AasxTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
