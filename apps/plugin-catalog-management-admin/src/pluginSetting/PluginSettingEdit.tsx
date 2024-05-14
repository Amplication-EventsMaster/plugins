import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PluginSettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <TextInput label="value" multiline source="value" />
      </SimpleForm>
    </Edit>
  );
};
