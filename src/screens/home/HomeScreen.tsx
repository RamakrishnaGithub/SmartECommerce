import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../../components/headers/HomeHeader";
import AppSafeAreaView from "../../components/views/AppSafeAreaView";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/AppFonts";
import ProductCard from "../../components/cards/ProductCard";
// import { products } from "../../data/products";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";
import { getProductsData } from "../../config/dataServices";

const HomeScreen = () => {
  const dispatch=useDispatch()
  const [products,setProducts]=useState([])
  const fetchData=async()=>{
    const data=await getProductsData()
    setProducts(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <AppSafeAreaView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageURL={item.imageURL}
            price={item.price}
            title={item.title}
            onAddCartPress={() => {dispatch(addItemToCart(item))}}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: s(10) }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
      />
    </AppSafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
