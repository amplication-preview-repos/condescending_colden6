import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { HierarchyLevelTitle } from "../hierarchyLevel/HierarchyLevelTitle";

export const AssetHierarchyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
