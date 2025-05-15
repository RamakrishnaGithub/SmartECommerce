import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeAreaView from "../../components/views/AppSafeAreaView";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";
import { colors } from "../../styles/colors";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { IS_IOS, PhoneNumberRegex, shippingFee, taxes } from "../../constants/constants";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { emptyCart } from "../../store/reducers/cartSlice";
import { t}from "i18next"
const CheckOutScreen = () => {
  const navigation=useNavigation()
  const dispatch=useDispatch()
  const schema = yup.object({
    fullName: yup
      .string()
      .required(t("NAME_IS_REQUIRED"))
      .min(3, t("NAME_MUST_BE_ALTEST_3_CHARECTERS")),
    phoneNumber: yup
      .string()
      .required(t("PHONE_NUMBER_IS_REQUIRED"))
      .matches(PhoneNumberRegex, t("MUST_BE_ONLY_10_DIGITS"))
      .min(10, t("PHONE_NUMBER_MUST_ALTEAST_10_DIGITS")),
    detailedddress: yup
      .string()
      .required(t("ADDRESS_IS_REQUIRED"))
      .min(15, t("PLZ_PROVIDE_ATLST_15_CHARS")),
  }).required();
  type FormData= yup.InferType<typeof schema>
  const { control, handleSubmit } = useForm({resolver:yupResolver(schema)});
  const {userData}=useSelector((state:RootState)=>state.userSlice)
  const {items}=useSelector((state:RootState)=>state.cartSlice)
  // console.log("userData",JSON.stringify(userData,null,3))
  const totalProductsPricesSum=items.reduce((acc,item)=>acc +Number(item.sum) ,0)
  const totalPrice=totalProductsPricesSum + taxes + shippingFee

  const saveOrder = async(formData: FormData) => {
    try {
      const orderbody={
        ...formData,
        items,
        totalProductsPricesSum,
        createdAt:new Date(),
        totalPrice,
      }
      const userOrderRef=collection(doc(db,"users",userData.uid),"orders")
      await addDoc(userOrderRef,orderbody)
      const orderRef=collection(db,"orders")
      await addDoc(orderRef,orderbody)
      showMessage({
        type:'success',
        message:t("ORDER_PLACE_SUCCESSFULLY")
      })
      navigation.goBack()
      dispatch(emptyCart())
      console.log("formData", formData,);
    } catch (error) {
      console.error("Error during saving order",error)
      showMessage({
        type:"danger",
        message:t("ERROR_HAPPEN")
      })
    }
  };
  
  return (
    <AppSafeAreaView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.container}>
          <AppTextInputController
            control={control}
            name={"fullName"}
            placeholder={t("FULL_NAME")}
          />
          <AppTextInputController
            control={control}
            name={"phoneNumber"}
            placeholder={t("PHONE_NUMBER")}
          />
          <AppTextInputController
            control={control}
            name={"detailedddress"}
            placeholder={t("DETAILED_ADDRESS")}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={t("CONFIRM")} onPress={handleSubmit(saveOrder)} />
      </View>
    </AppSafeAreaView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: colors.white,
    marginTop: IS_IOS ? vs(15) : 0,
    paddingTop: vs(15),
  },
  buttonContainer: {
    position: "absolute",
    paddingHorizontal: sharedPaddingHorizontal,
    width: "100%",
    bottom: IS_IOS ? 0 : vs(16),
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
  },
});
