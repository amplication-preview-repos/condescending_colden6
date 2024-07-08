import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AssetHierarchyTitle } from "../assetHierarchy/AssetHierarchyTitle";

export const HierarchyLevelCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="LevelName" source="levelName" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="assetHierarchies"
          reference="AssetHierarchy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetHierarchyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
