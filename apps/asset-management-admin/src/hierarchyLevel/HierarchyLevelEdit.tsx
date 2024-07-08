import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AssetHierarchyTitle } from "../assetHierarchy/AssetHierarchyTitle";

export const HierarchyLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
