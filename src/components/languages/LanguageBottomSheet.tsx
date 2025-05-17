import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import { s, vs } from "react-native-size-matters";
import AppRadioButton from "../inputs/AppRadioButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { t } from "i18next";
import { languageList } from "../localization/languageList";
import i18n from "../localization/i18n";
const LanguageBottomSheet = () => {
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const languagePress = (code: string) => {
    setSelectedLang(code);
  };
  const handleConfirm=()=>{
    SheetManager.hide("LANG_SHEET")
    console.log("selectedLang",selectedLang)
    i18n.changeLanguage(selectedLang)
  }
  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText variant="bold" style={styles.title}>
          {t("CHANGE_LANGUAGE")}
        </AppText>
        {languageList.map((lang) => (
          <AppRadioButton
          key={lang.code}
          title={lang.label}
          selected={selectedLang === lang.code}
          onPress={() => languagePress(lang.code)}
        />
        ))}
        <AppButton
          title={t("CONFIRM")}
          onPress={handleConfirm}
          style={styles.confirmbtn}
        />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sharedPaddingHorizontal,
  },
  title: {
    marginVertical: vs(14),
    textAlign: "center",
  },
  confirmbtn: {
    marginTop: vs(4),
    marginBottom: vs(12),
  },
});
