import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { colors } from "../../styles/colors";

type AppButtonProps = {
  title:string,
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle | ViewStyle[];
  styleTitle?: TextStyle | TextStyle[];
  disabled?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  backgroundColor = colors.primary,
  textColor = colors.white,
  style,
  styleTitle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor: disabled ? colors.disableGrey : backgroundColor },
        style,
      ]}
      disabled={disabled}
    >
      <AppText
        variant="bold"
        style={[styles.title, { color: textColor }, styleTitle]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(25),
    alignSelf: "center",
  },
  title: {
    fontSize: s(16),
  },
});
