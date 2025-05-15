// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const App = () => {
//   const [totalexp,setTotalExp]=useState(0)
//   const storeTotalExpInLocalStorage=async(value)=>{
//     try {
//       await AsyncStorage.setItem("totalExpenses",value)
//     } catch (error) {
//       console.error("error",error)
//     }
//   }
//   const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('totalExpenses');
//       if (value !== null) {
//         console.log("value",value)
//         setTotalExp(+value)
//       }
//     } catch (e) {
//       // error reading value
//     }
//   };
//   const removeData = async () => {
//     try {
//       await AsyncStorage.removeItem('totalExpenses');

//     } catch (e) {
//       // error reading value
//     }
//   };
//   useEffect(()=>{
//     getData()
//   },[])
//   const increaseExp=()=>{
//    const  increaseUpdate=totalexp+10
//     setTotalExp(increaseUpdate)
//     storeTotalExpInLocalStorage(increaseUpdate.toString())
//   }
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
//       <Text> expense app</Text>
//       <Text>Total expense:{totalexp}</Text>
//       <Button title='increase 10 +' onPress={increaseExp}></Button>
//       <Button title='remove data' onPress={removeData}></Button>

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})



import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/components/localization/i18n";

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
      <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <FlashMessage position={"top"} />
        <MainAppStack />
      </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
