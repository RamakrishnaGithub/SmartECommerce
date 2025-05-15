import AsyncStorage from "@react-native-async-storage/async-storage"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface userDataType{
    userData:object | null,
}

const initialState: userDataType ={
    userData: null,}
const userSlice=createSlice({
    name:"userData",
    initialState,
    reducers:{
        setUserData:(state,action:PayloadAction<object>)=>{
            state.userData = action.payload
            AsyncStorage.setItem("USER_DATA",JSON.stringify(action.payload) )
        },
       
    }
})

export const {setUserData,}=userSlice.actions;
export default userSlice.reducer; 