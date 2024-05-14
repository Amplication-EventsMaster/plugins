import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PluginIconEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
