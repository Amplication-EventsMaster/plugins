import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PluginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="pluginId" source="pluginId" />
        <div />
      </SimpleForm>
    </Create>
  );
};
