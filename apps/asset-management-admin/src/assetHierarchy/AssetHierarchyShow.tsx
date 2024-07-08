import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ASSETHIERARCHY_TITLE_FIELD } from "./AssetHierarchyTitle";
import { HIERARCHYLEVEL_TITLE_FIELD } from "../hierarchyLevel/HierarchyLevelTitle";

export const AssetHierarchyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Parent" source="parent" />
        <ReferenceField
          label="HierarchyLevel"
          source="hierarchylevel.id"
          reference="HierarchyLevel"
        >
          <TextField source={HIERARCHYLEVEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Asset"
          target="assetHierarchyId"
          label="Assets"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Description" source="description" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="AssetHierarchy"
              source="assethierarchy.id"
              reference="AssetHierarchy"
            >
              <TextField source={ASSETHIERARCHY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
