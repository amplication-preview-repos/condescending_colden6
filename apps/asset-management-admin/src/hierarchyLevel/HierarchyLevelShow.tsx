import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HIERARCHYLEVEL_TITLE_FIELD } from "./HierarchyLevelTitle";

export const HierarchyLevelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="LevelName" source="levelName" />
        <TextField label="Description" source="description" />
        <ReferenceManyField
          reference="AssetHierarchy"
          target="hierarchyLevelId"
          label="AssetHierarchies"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
