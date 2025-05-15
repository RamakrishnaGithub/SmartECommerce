import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeAreaView from "../../components/views/AppSafeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";
import TotalsVew from "../../components/cart/TotalsVew";
import { products } from "../../data/products";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppButton from "../../components/buttons/AppButton";
import { vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addItemToCart, removeItemFromCart, removeProductFromCart } from "../../store/reducers/cartSlice";
import { shippingFee, taxes } from "../../constants/constants";
import {t} from "i18next"

const CartScreen = () => {
  const navigation = useNavigation();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const totalProductsPricesSum=items.reduce((acc,item)=>acc +Number(item.sum) ,0)
  const orderTotal=totalProductsPricesSum + taxes + shippingFee
  return (
    <AppSafeAreaView>
      <HomeHeader />
      {items?.length > 0 ? <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
        {/* <EmptyCart/> */}
        {/* <CartItem/> */}
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <CartItem
                {...item}
                price={item.sum}
                onPressIncrease={()=>dispatch(addItemToCart(item))}
                onPressDelete={()=>dispatch(removeProductFromCart(item))}
                onPressReduce={() => dispatch(removeItemFromCart(item))}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          // ListFooterComponent={
          //   <View >
          //     <TotalsVew itemPrice={500} orderTotal={525} />
          //     <AppButton title="Continue" style={styles.CountinueButton} />
          //   </View>
          // }
        />

        <TotalsVew itemPrice={totalProductsPricesSum} orderTotal={orderTotal} />
        <AppButton
          title={t("COUNTINUE")}
          onPress={() => navigation.navigate("CheckOutScreen")}
        />
      </View>
      : 
      <EmptyCart/>
      }
      
    </AppSafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  CountinueButton: {
    marginVertical: vs(4),
  },
});
