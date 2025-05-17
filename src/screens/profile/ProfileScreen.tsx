import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeAreaView from "../../components/views/AppSafeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSelection from "../../components/buttons/ProfileSelection";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import LanguageBottomSheet from "../../components/languages/LanguageBottomSheet";
import { SheetManager } from "react-native-actions-sheet";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {signOut} from "firebase/auth";
import {auth} from "../../config/firebase"
const ProfileScreen = () => {
  const navigation=useNavigation()
  const {t}=useTranslation()
  const handleLogout=async()=>{
    await AsyncStorage.removeItem("USER_DATA")
    navigation.navigate("AuthStack" as never)  
    await signOut(auth)
  }
  return (
    <AppSafeAreaView>
      <HomeHeader />
      {/* <AppText variant="bold" style={{ fontSize: s(18), marginTop: vs(8) }}>
        Hello, ram
      </AppText> */}
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSelection title={t("MY_ORDERS")} onPress={()=>navigation.navigate("MyOrdersScreen" as never)}/>
        <ProfileSelection title={t("LANGUAGE")} onPress={()=>SheetManager.show("LANG_SHEET")}/>
        <ProfileSelection title={t("LOGOUT")} onPress={handleLogout}/>
      </View>
      <LanguageBottomSheet />
    </AppSafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
