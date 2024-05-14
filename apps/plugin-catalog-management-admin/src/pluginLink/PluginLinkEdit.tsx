import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PluginLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="githubLink" source="githubLink" />
        <TextInput label="npmLink" source="npmLink" />
      </SimpleForm>
    </Edit>
  );
};
