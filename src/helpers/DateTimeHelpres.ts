import moment from "moment"

export const getDateFormFireStoreTimeStampObject=(firestoreObject)=>{
    const date=new Date(firestoreObject.seconds * 1000)
    return moment(date).format("MMMM Do, hh:mm A")
}