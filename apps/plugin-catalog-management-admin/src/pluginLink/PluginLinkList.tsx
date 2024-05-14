import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PluginLinkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PluginLinks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="githubLink" source="githubLink" />
        <TextField label="ID" source="id" />
        <TextField label="npmLink" source="npmLink" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
