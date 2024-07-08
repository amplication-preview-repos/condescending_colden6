import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HIERARCHYLEVEL_TITLE_FIELD } from "../hierarchyLevel/HierarchyLevelTitle";

export const AssetHierarchyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AssetHierarchies"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
