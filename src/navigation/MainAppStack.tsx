import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import MyOrdersScreen from "../screens/profile/MyOrdersScreen";
import { useTranslation } from "react-i18next";
import { colors } from "../styles/colors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Stack = createStackNavigator();
const MainAppStack = () => {
  const [isLoading,setIsLoading]=useState<boolean>(true)
  const [userData,setUserData]=useState<object | null>(null)
  const {t}=useTranslation()
  useEffect(()=>{
    onAuthStateChanged(auth,(userData)=>{
      if(userData){
        console.log("user login ")
        setIsLoading(false)
        setUserData(userData)
      }else{
        console.log("user loged out")
        setIsLoading(false)
      }
    })
  },[])

  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
        <ActivityIndicator size={"large"} color={colors.primary}/>
      </View>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
    initialRouteName={userData ? "MainAppBottomTabs" : "AuthStack"}
    >
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
