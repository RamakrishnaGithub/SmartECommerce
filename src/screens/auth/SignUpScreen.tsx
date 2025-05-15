import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppSafeAreaView from "../../components/views/AppSafeAreaView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { Images } from "../../constants/images-path";
import { s, verticalScale, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { colors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  emailRegex,
  nameRegex,
  passwordRegex,
} from "../../constants/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/userSlice";
import {t} from "i18next"


const SignUpScreen = () => {
  const schema = yup.object({
    userName: yup
      .string()
      .required(t("NAME_IS_REQUIRED"))
      .min(3, t("NAME_MUST_BE_ALTEST_3_CHARECTERS"))
      .matches(nameRegex, t("ENTER_VALID_USER_NAME")),
    email: yup
      .string()
      .email(t("PLEASE_ENTER_VALID_EMAIL"))
      .required(t("EMAIL_IS_REQUIRED"))
      .matches(emailRegex, t("PLEASE_ENTER_VALID_EMAIL")),
    password: yup
      .string()
      .required(t("PASSWORD_IS_REQUIRED"))
      .matches(passwordRegex, t("ETNER_STRONG_PASSWORD"))
      .min(6, t("ENTER_MINIMUM_6_CHARECTERS")),
  });
  type FormData = yup.InferType<typeof schema>;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const saveSingUpData = async (saveSingUpData: FormData) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        saveSingUpData.email,
        saveSingUpData.password
      );
      Alert.alert("Account is created successfully!");
      console.log("saveSingUpData", saveSingUpData);
      navigation.navigate("MainAppBottomTabs");
      const userDataObject = {
        uid: userCredentials.user.uid,
      };
      dispatch(setUserData(userDataObject));
      dispatch(setUserData(userDataObject));
    } catch (error: any) {
      let errorMessage = "";

      if (error.code === "auth/email-already-in-use") {
        errorMessage = t("ERROR_MESSAGES.THIS_EMAIL_IS_ALREDY_IN_USE");
      } else if (error.code === "auth/invalid-email") {
        errorMessage = t("ERROR_MESSAGES.THE_EMAIL_ADDRESS_IS_INVALID");
      } else if (error.code === "auth/operation-not-allowed") {
        errorMessage = t("ERROR_MESSAGES.EMAIL_PASSWORD_ACCOUNTS_ARE_NOT_ENABLED");
      } else if (error.code === "auth/weak-password") {
        errorMessage = t("ERROR_MESSAGES.PASSWORD_SHOULD_BE_ATLEAST_8_CHARECTERS");
      } else {
        errorMessage = t("ERROR_MESSAGES.AN_ERROR_OCCURED_DURING_SIGN_UP");
      }
      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };
  return (
    <AppSafeAreaView style={styles.container}>
      <Image source={Images.appLogo} style={styles.appLogo} />
      <AppTextInputController<FormData>
        name={"userName"}
        control={control}
        placeholder={t("USER_NAME")}
      />
      <AppTextInputController<FormData>
        name={"email"}
        control={control}
        placeholder={t("email")}
      />
      <AppTextInputController<FormData>
        name={"password"}
        control={control}
        placeholder={t("PASSWORD")}
        secureTextEntry
      />
      <AppText variant="bold" style={styles.appName}>
        Smart E-Commerce
      </AppText>
      <AppButton
        title={t("CREATE_NEW_ACCONT")}
        onPress={handleSubmit(saveSingUpData)}
      />
      <AppButton
        onPress={() => navigation.navigate("SignInScreen")}
        title={t("GO_TO_SIGN_IN")}
        style={styles.signIn}
        textColor={colors.primary}
      />
    </AppSafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  appLogo: {
    height: vs(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  signIn: {
    backgroundColor: colors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: colors.primary,
  },
});
