import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PluginSettingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <TextInput label="value" multiline source="value" />
      </SimpleForm>
    </Create>
  );
};
