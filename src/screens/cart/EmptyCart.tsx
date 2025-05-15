import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { AppFonts } from "../../styles/AppFonts";
import { colors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {t} from "i18next"

const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={colors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>{t("YOUR_CART_IS_EMPTY")}</AppText>
      <AppText style={styles.subTitle}>
        {t("BROWSE_YOUR_PRODUCTS_AND_FIND_SOMETHING")}
      </AppText>
      <AppButton
        title={t("SRTART_SHOPPING")}
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(16),
    fontFamily: AppFonts.bold,
    color: colors.primary,
    marginBottom: vs(10),
  },
  subTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.medium,
    color: colors.midGrey,
    marginBottom: vs(10),
  },
  button: {
    width: "100%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.8,
  },
});
