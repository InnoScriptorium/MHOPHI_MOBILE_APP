import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "./app/screens/DashboardScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AssignmentDetailScreen from "./app/screens/AssignmentDetailScreen";
import QRCodeScreen from "./app/screens/QRCodeScreen";
import QRCodeGenerator from "./app/screens/QRCodeGenerator";
import Actwork from "./app/screens/Actwork";
import Workcarddet from "./app/screens/Workcarddet";
import Sidebar from "./app/components/Sidebar";
import UserInfo from "./app/screens/UserInfo";
import ProcessParameters from "./app/screens/ProcessParameters";
import ActiveWorkCards from "./app/screens/ActiveWorkCards";
import WorkCardParameters from "./app/screens/WorkCardParameters";
import RecordGoods from "./app/screens/RecordGoods";
import RawMaterial from "./app/screens/RawMaterial";
import AA3005Aluminium from "./app/screens/AA3005Aluminium";
import WorkToStore from "./app/screens/WorkToStore";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AssignmentDetail"
          component={AssignmentDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QRCodeScreen"
          component={QRCodeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActWork"
          component={Actwork}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkCardDet"
          component={Workcarddet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sidebar"
          component={Sidebar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProcessParameters"
          component={ProcessParameters}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActiveWorkCards"
          component={ActiveWorkCards}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkCardParameters"
          component={WorkCardParameters}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecordGoods"
          component={RecordGoods}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkToStore"
          component={WorkToStore}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AA3005Aluminium"
          component={AA3005Aluminium}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RawMaterial"
          component={RawMaterial}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
