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
import { emailRegex, passwordRegex } from "../../constants/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/userSlice";
import { t } from "i18next";


const SignInScreen = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email(t("PLEASE_ENTER_VALID_EMAIL"))
        .required(t("EMAIL_IS_REQUIRED")),
      password: yup
        .string()
        .required(t("PASSWORD_IS_REQUIRED"))
        .matches(passwordRegex, t("ETNER_MIN_6_CAHR_VALID_PASSWORD"))
        .min(6,t("ENTER_MINIMUM_6_CHARECTERS")),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;
  const { control, handleSubmit } = useForm<FormData>({ resolver: yupResolver(schema) });
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const saveLogin =async (loginData: FormData) => {
    try {
      const userCredentials=await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      )
      // Alert.alert("Login successfully!")
      navigation.navigate("MainAppBottomTabs");
      const userDataObject={
        uid: userCredentials.user.uid
      }
      dispatch(setUserData(userDataObject))
      console.log(JSON.stringify(userDataObject,null,3) )

    } catch (error:any) {
      console.log(error.code)
      let errorMessage=""
      if (error.code === 'auth/invalid-credential') {
        errorMessage = t("ERROR_MESSAGES.INVALID_EMAIL_OR_PASSWORD");
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = t("ERROR_MESSAGES.NO_USER_FOND_WITH_THIS_EMAIL");
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = t("ERROR_MESSAGES.INCORRECT_PASSWORD");
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = t("ERROR_MESSAGES.INVALID_EMAIL_ADDRESS_FORMATE");
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = t("ERROR_MESSAGES.THIS_USER_ACCOUNT_HAS_BEEN_DIASABLED");
      } else {
        errorMessage = t("ERROR_MESSAGES.AN_ERROR_OCCURED_DURING_SIGN_IN");
      }
      showMessage({
        type:'danger',
        message:errorMessage
      })
    }
  };
  return (
    <AppSafeAreaView style={styles.container}>
      <Image source={Images.appLogo} style={styles.appLogo} />
      <AppTextInputController<FormData>
        name={"email"}
        control={control}
        placeholder={t("EMAIL")}
        keyboardType="email-address"
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
        title={t("SIGN_IN_BUTTON")}
        onPress={
          handleSubmit(saveLogin)
        }
      />
      <AppButton
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
        title={t("SIGN_UP")}
        style={styles.signup}
        textColor={colors.primary}
      />
    </AppSafeAreaView>
  );
};

export default SignInScreen;

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
  signup: {
    backgroundColor: colors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: colors.primary,
  },
});
