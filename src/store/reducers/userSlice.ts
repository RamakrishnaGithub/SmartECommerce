import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface userDataType{
    userData:object
}

const initialState: userDataType ={
    userData:{}
}
const userSlice=createSlice({
    name:"userData",
    initialState,
    reducers:{
        setUserData:(state,action:PayloadAction<object>)=>{
            state.userData = action.payload
        }
    }
})

export const {setUserData}=userSlice.actions;
export default userSlice.reducer; 