import React from "react";
import { StyleSheet } from "react-native";
import { Controller, FieldValues, Control, RegisterOptions, Path } from "react-hook-form";
import AppTextInput from "./AppTextInput";
import { colors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";

interface AppTextInputControllerProps<T extends FieldValues> {
  name:  Path<T>;
  control: Control<T>;
  rules?: object;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
}

function AppTextInputController<T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType = "default",
}: AppTextInputControllerProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && styles.errorInput}
          />
          {error && (
            <AppText variant="bold" style={styles.errorMsg}>
              {error.message}
            </AppText>
          )}
        </>
      )}
    />
  );
}

export default AppTextInputController;

const styles = StyleSheet.create({
  errorInput: {
    borderColor: colors.red,
  },
  errorMsg: {
    color: colors.red,
    fontSize: s(12),
    textAlign: "center",
    marginBottom: vs(10),
    marginTop: -vs(8),
  },
});
