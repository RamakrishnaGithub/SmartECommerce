import { collection, doc, getDocs } from "firebase/firestore"
import { auth, db } from "./firebase"
import { store } from "../store/store"

export const getProductsData=async()=>{
    try {
        const data=await getDocs(collection(db,"products"))
        const list=[]
        data.forEach((item)=>{
            list.push(item.data())
        })
        return list;
    } catch (error) {
        console.error("Error fetching data",error)
    }
}
export const fetchUserOrders=async()=>{
    try {
        // const uidFromRedux=store.getState().userSlice.userData.uid
        const uidFromFirebase=auth.currentUser?.uid
        const userOrderRef=collection(doc(db,"users",uidFromFirebase),"orders")
        const querySnapShop=await getDocs(userOrderRef)
        const orderList=querySnapShop.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        return orderList;
    } catch (error) {
        console.error("Error during fetchUserOrders",error)
    }
}