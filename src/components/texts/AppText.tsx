import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import React, { FC } from "react";
import {s} from 'react-native-size-matters'
import { colors } from "../../styles/colors";
import { AppFonts } from "../../styles/AppFonts";


interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "medium" | "bold";

}
const AppText: FC<AppTextProps>= ({ children, style, variant = "medium", ...rest }) => {
  return (
    <Text {...rest} style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: s(14),
    color: colors.black,
    fontFamily:AppFonts.bold
  },
  medium: {
    fontSize: s(12),
    color: colors.black,
    fontFamily:AppFonts.medium
  },
});
