import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import AppText from '../texts/AppText'
import { s, vs, ms } from 'react-native-size-matters'
import { colors } from '../../styles/colors'

interface AppRadioButton{
  title:string,
  selected:boolean,
  onPress:()=>void,
}
const AppRadioButton :FC<AppRadioButton> = ({ title, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.circle}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <AppText variant="bold" style={styles.name}>
        {title}
      </AppText>
    </TouchableOpacity>
  )
}

export default AppRadioButton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vs(8),
    borderRadius: s(8),
    backgroundColor: colors.white,
  },
  circle: {
    height: vs(20),
    width: s(22),
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: s(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: vs(14),
    width: s(14),
    backgroundColor: colors.primary,
    borderRadius: s(7),
  },
  name: {
    marginLeft: s(12),
    color: colors.primary,
    fontSize: ms(14),
  },
})
