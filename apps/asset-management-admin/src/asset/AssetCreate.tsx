import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AssetHierarchyTitle } from "../assetHierarchy/AssetHierarchyTitle";
import { AasxTitle } from "../aasx/AasxTitle";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
