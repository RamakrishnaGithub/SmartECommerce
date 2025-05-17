import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/components/localization/i18n";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fonstLoaded] = useFonts({
    "Nunito-bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  });
  if (!fonstLoaded) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <FlashMessage position={"top"} />
        <MainAppStack />
      </NavigationContainer>
      </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
