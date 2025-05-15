import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeAreaView from "../../components/views/AppSafeAreaView";
import AppText from "../../components/texts/AppText";
import OrderDetailsCard from "../../components/orderDetails/OrderDetailsCard";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { fetchUserOrders } from "../../config/dataServices";
import { getDateFormFireStoreTimeStampObject } from "../../helpers/DateTimeHelpres";

const MyOrdersScreen = () => {
  const [orderList,setOrderList]=useState([])
const getOrderList=async()=>{
 const response=await fetchUserOrders()
 setOrderList(response)
}
useEffect(()=>{
  getOrderList()
},[])
  return (
    <AppSafeAreaView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <FlatList
        data={orderList}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
            return(
                <OrderDetailsCard date={getDateFormFireStoreTimeStampObject(item.createdAt)}
                totalAmout={item.totalProductsPricesSum}
                totalPrice={item.totalPrice}
                />
            )
        }}
        />
      </View>
      {/* <OrderDetailsCard/> */}
    </AppSafeAreaView>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({});
