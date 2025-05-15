import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { commonStyles } from "../../styles/sharedStyles";
import AppText from "../texts/AppText";
import { colors } from "../../styles/colors";
import { AppFonts } from "../../styles/AppFonts";
import {t} from "i18next"
interface OrderDetailsCardProps{
    date:string,
    totalAmout : string | number,
    totalPrice : string | number,
}
const OrderDetailsCard : FC<OrderDetailsCardProps>= ({ date,totalAmout,totalPrice}) => {
  return (
    <View style={styles.container}>
      <AppText variant="medium" style={styles.title}>
        {t("ORDER_DETAILS")}:
      </AppText>
      <View style={styles.saparator} />
      <View style={styles.details}>
        <AppText variant="medium" style={styles.totalPrice}>
          {t("TOTAL_PRICE")}: $ {totalPrice}
        </AppText>
        <AppText variant="medium" style={styles.amount}>
          $ {totalAmout}
        </AppText>
      </View>
      <View style={styles.details}>
        <AppText variant="medium" style={styles.totalPrice}>
          {t("DATE")}: {date}
        </AppText>
        {/* <AppText variant="medium" style={styles.amount}>
        {date}
        </AppText> */}
      </View>
    </View>
  );
};

export default OrderDetailsCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: vs(100),
    // backgroundColor:'red',
    ...commonStyles.shadow,
    padding: s(10),
    marginBottom:vs(4)
  },
  title: {
    fontSize: s(16),
    paddingBottom: vs(4),
  },
  saparator: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: s(8),
  },
  totalPrice: {
    fontSize: s(16),
    fontFamily: AppFonts.medium,
    color: colors.primary,
  },
  amount: {
    fontSize: s(16),
    fontFamily: AppFonts.medium,
    color: colors.red,
  },
});
