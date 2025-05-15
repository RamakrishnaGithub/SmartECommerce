import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/AppFonts";
import { colors } from "../../styles/colors";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { commonStyles } from "../../styles/sharedStyles";
import {t} from "i18next"

interface CartItemProps{
    title:string,
    price:string | number,
    imageURL:string,
    qty:number,
    onPressIncrease:()=> void,
    onPressReduce:()=> void,
    onPressDelete:()=> void,
}
const CartItem :FC< CartItemProps>= ({title,price,imageURL,qty,onPressIncrease,onPressReduce,onPressDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageURL }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>$ {price}</AppText>
        <View style={styles.QtyConatiner}>
          <TouchableOpacity style={styles.iconButton} onPress={onPressIncrease}>
            <FontAwesome name="plus" size={s(14)} color={colors.primary} />
          </TouchableOpacity>
          <AppText variant="bold" style={styles.textQty}>
            {qty}
          </AppText>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="minus" size={s(14)} color={colors.primary} onPress={onPressReduce}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.deleteButton} onPress={onPressDelete}>
          <AntDesign name="delete" size={s(18)} color={colors.red} />
          <AppText style={styles.delteText}>{t("DELETE")}</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    // height:vs(100),
    paddingBottom: vs(4),
    borderWidth: 1,
    borderColor: colors.blueGrey,
    ...commonStyles.shadow,
    marginBottom:vs(4)
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  detailsContainer: {
    flex: 2.5,
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    width: s(90),
    height: vs(90),
    overflow: "hidden",
    resizeMode: "contain",
  },
  title: {
    fontSize: s(14),
    fontFamily: AppFonts.bold,
    color: colors.primary,
    marginTop: vs(5),
  },
  price: {
    fontSize: s(16),
    fontFamily: AppFonts.bold,
    color: colors.primary,
    marginVertical: vs(5),
  },
  delteText: {
    marginLeft: s(7),
    fontFamily: AppFonts.medium,
    color: colors.midGrey,
    fontSize: s(12),
    marginTop: vs(3),
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom:vs(5)
  },
  QtyConatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(5),
    paddingVertical: vs(5),
    borderWidth: 1,
    borderRadius: s(30),
    borderColor: colors.blueGrey,
    width: s(80),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    padding: s(5),
    height: vs(20),
    width: s(20),
    borderRadius: s(10),
  },
  textQty: {
    flex: 1,
    textAlign: "center",
    color: colors.primary,
  },
});
