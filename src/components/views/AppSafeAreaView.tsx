import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { colors } from '../../styles/colors'
import { IS_ANDROID, IS_IOS } from '../../constants/constants';

interface AppSafeAreaViewProps {
  children: ReactNode;
  style?: ViewStyle;
}
const AppSafeAreaView: FC<AppSafeAreaViewProps> = ({children,style}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container,style]}>{children}</View>
    </SafeAreaView>
  )
}

export default AppSafeAreaView

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: colors.white,
    marginTop: IS_IOS ? StatusBar.currentHeight || 0 : undefined
  },
  container:{
    flex:1
  }
})