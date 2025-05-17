import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../texts/AppText'
import { colors } from '../../styles/colors'
import { shippingFee, taxes } from '../../constants/constants'
import { useTranslation } from 'react-i18next'
interface TotalsViewProps{
    itemPrice:number,
    orderTotal:number
}
const TotalsVew: FC<TotalsViewProps> = ({itemPrice,orderTotal}) => {
  const {t}=useTranslation()
  return (
    <View style={styles.conatainer}>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t("ITEM_PRICE")}:</AppText>
        <AppText style={styles.textPrice}>$ {itemPrice}</AppText>

      </View>
      <View style={styles.row}>
      <AppText style={styles.textTitle}>{t("TAXES")}:</AppText>
        <AppText style={styles.textPrice}>$ {taxes}</AppText>

      </View>
      <View style={styles.row}>
      <AppText style={styles.textTitle}>{t("SHIPPING_FEE")}:</AppText>
        <AppText style={styles.textPrice}>$ {shippingFee}</AppText>

      </View>
      <View style={styles.saprator}/>
      <View style={styles.row}>
      <AppText style={styles.textTitle}>{t("ORDER_TOTAL")}:</AppText>
        <AppText style={styles.textPrice}>$ {orderTotal}</AppText>

      </View>
    </View>
  )
}

export default TotalsVew

const styles = StyleSheet.create({
    conatainer:{
        marginTop:vs(10)
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:vs(10),
        paddingHorizontal:s(10)
    },
    textTitle:{
        fontSize:s(16),
        flex:1
    },
    textPrice:{
        fontSize:s(16),
        color:colors.primary
    },
    saprator:{
        height:1,
        width:'100%',
        backgroundColor:colors.blueGrey,
        marginVertical:vs(5)
    }
})