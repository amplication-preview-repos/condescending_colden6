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
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { RightList } from "./right/RightList";
import { RightCreate } from "./right/RightCreate";
import { RightEdit } from "./right/RightEdit";
import { RightShow } from "./right/RightShow";
import { RoleRightList } from "./roleRight/RoleRightList";
import { RoleRightCreate } from "./roleRight/RoleRightCreate";
import { RoleRightEdit } from "./roleRight/RoleRightEdit";
import { RoleRightShow } from "./roleRight/RoleRightShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
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
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Right"
          list={RightList}
          edit={RightEdit}
          create={RightCreate}
          show={RightShow}
        />
        <Resource
          name="RoleRight"
          list={RoleRightList}
          edit={RoleRightEdit}
          create={RoleRightCreate}
          show={RoleRightShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
