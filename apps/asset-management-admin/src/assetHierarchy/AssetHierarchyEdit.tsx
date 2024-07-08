import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { HierarchyLevelTitle } from "../hierarchyLevel/HierarchyLevelTitle";

export const AssetHierarchyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assets"
          reference="Asset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetTitle} />
        </ReferenceArrayInput>
        <TextInput label="Parent" source="parent" />
        <ReferenceInput
          source="hierarchyLevel.id"
          reference="HierarchyLevel"
          label="HierarchyLevel"
        >
          <SelectInput optionText={HierarchyLevelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
