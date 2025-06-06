import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { colors } from "../../styles/colors";

interface AppTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
  style?: TextStyle;
}
const AppTextInput: FC<AppTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: vs(40),
    width: "100%",
    borderRadius: s(20),
    borderWidth: 1,
    borderColor: colors.borderColor,
    paddingHorizontal: s(15),
    fontSize: s(16),
    backgroundColor: colors.white,
    marginBottom: vs(10),
  },
});
