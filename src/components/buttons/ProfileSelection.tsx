import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { colors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/AppFonts";
import { MaterialIcons } from "@expo/vector-icons";

interface ProfileSelectionProps{
    onPress?:()=>void;
    title:string,
}
const ProfileSelection :FC<ProfileSelectionProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
      <View>
        <MaterialIcons
          name="arrow-forward-ios"
          color={colors.midGrey}
          size={s(14)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSelection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: colors.lightGrey,
    paddingBottom: vs(10),
    marginTop: vs(14),
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: s(16),
    fontFamily: AppFonts.bold,
    color: colors.primary,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: s(8),
  },
});
