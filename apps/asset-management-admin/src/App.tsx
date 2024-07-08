import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { HierarchyLevelList } from "./hierarchyLevel/HierarchyLevelList";
import { HierarchyLevelCreate } from "./hierarchyLevel/HierarchyLevelCreate";
import { HierarchyLevelEdit } from "./hierarchyLevel/HierarchyLevelEdit";
import { HierarchyLevelShow } from "./hierarchyLevel/HierarchyLevelShow";
import { AssetHierarchyList } from "./assetHierarchy/AssetHierarchyList";
import { AssetHierarchyCreate } from "./assetHierarchy/AssetHierarchyCreate";
import { AssetHierarchyEdit } from "./assetHierarchy/AssetHierarchyEdit";
import { AssetHierarchyShow } from "./assetHierarchy/AssetHierarchyShow";
import { AasxList } from "./aasx/AasxList";
import { AasxCreate } from "./aasx/AasxCreate";
import { AasxEdit } from "./aasx/AasxEdit";
import { AasxShow } from "./aasx/AasxShow";
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
        title={"AssetManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="HierarchyLevel"
          list={HierarchyLevelList}
          edit={HierarchyLevelEdit}
          create={HierarchyLevelCreate}
          show={HierarchyLevelShow}
        />
        <Resource
          name="AssetHierarchy"
          list={AssetHierarchyList}
          edit={AssetHierarchyEdit}
          create={AssetHierarchyCreate}
          show={AssetHierarchyShow}
        />
        <Resource
          name="Aasx"
          list={AasxList}
          edit={AasxEdit}
          create={AasxCreate}
          show={AasxShow}
        />
      </Admin>
    </div>
  );
};

export default App;
