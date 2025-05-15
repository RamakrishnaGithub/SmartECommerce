import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { colors } from "./colors";

export const sharedPaddingHorizontal = s(12);
export const commonStyles = StyleSheet.create({
  shadow: {
    // iOS shadow
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  
    // Android shadow
    elevation: 4,
    backgroundColor: colors.white, // required on Android to see elevation effect
    borderRadius: 12, // optional, makes shadows look cleaner with rounded views
  }
  
});
