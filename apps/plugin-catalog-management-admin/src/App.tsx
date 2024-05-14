import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PluginLinkList } from "./pluginLink/PluginLinkList";
import { PluginLinkCreate } from "./pluginLink/PluginLinkCreate";
import { PluginLinkEdit } from "./pluginLink/PluginLinkEdit";
import { PluginLinkShow } from "./pluginLink/PluginLinkShow";
import { PluginList } from "./plugin/PluginList";
import { PluginCreate } from "./plugin/PluginCreate";
import { PluginEdit } from "./plugin/PluginEdit";
import { PluginShow } from "./plugin/PluginShow";
import { PluginSettingList } from "./pluginSetting/PluginSettingList";
import { PluginSettingCreate } from "./pluginSetting/PluginSettingCreate";
import { PluginSettingEdit } from "./pluginSetting/PluginSettingEdit";
import { PluginSettingShow } from "./pluginSetting/PluginSettingShow";
import { PluginIconList } from "./pluginIcon/PluginIconList";
import { PluginIconCreate } from "./pluginIcon/PluginIconCreate";
import { PluginIconEdit } from "./pluginIcon/PluginIconEdit";
import { PluginIconShow } from "./pluginIcon/PluginIconShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Plugin Catalog Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PluginLink"
          list={PluginLinkList}
          edit={PluginLinkEdit}
          create={PluginLinkCreate}
          show={PluginLinkShow}
        />
        <Resource
          name="Plugin"
          list={PluginList}
          edit={PluginEdit}
          create={PluginCreate}
          show={PluginShow}
        />
        <Resource
          name="PluginSetting"
          list={PluginSettingList}
          edit={PluginSettingEdit}
          create={PluginSettingCreate}
          show={PluginSettingShow}
        />
        <Resource
          name="PluginIcon"
          list={PluginIconList}
          edit={PluginIconEdit}
          create={PluginIconCreate}
          show={PluginIconShow}
        />
      </Admin>
    </div>
  );
};

export default App;
