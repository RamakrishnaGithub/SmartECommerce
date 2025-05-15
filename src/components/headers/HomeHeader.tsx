import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'
import { Images } from '../../constants/images-path'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.appLogo} style={styles.logo}/>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:vs(10)
    },
    logo:{
        height:vs(40),
        width:s(40),
        tintColor:colors.white
    }
})