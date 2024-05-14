import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PluginLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="githubLink" source="githubLink" />
        <TextInput label="npmLink" source="npmLink" />
      </SimpleForm>
    </Create>
  );
};
