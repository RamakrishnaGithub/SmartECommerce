import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import MyOrdersScreen from "../screens/profile/MyOrdersScreen";
import { t} from "i18next"

const Stack = createStackNavigator();
const MainAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen
        options={{ headerShown: true,title:t("CHECK_OUT") }}
        name="CheckOutScreen"
        component={CheckOutScreen}
      />
      <Stack.Screen
        options={{ headerShown: true,title:t("MY_ORDERS") }}
        name="MyOrdersScreen"
        component={MyOrdersScreen}
      />
    </Stack.Navigator>
  );
};

export default MainAppStack;

const styles = StyleSheet.create({});
