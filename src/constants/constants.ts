import { Platform } from "react-native";

export const IS_ANDROID=Platform.OS === "android";
export const IS_IOS=Platform.OS === "ios"
export const taxes=15;
export const shippingFee=10
export const PhoneNumberRegex=/^[6-9][0-9]{9}$/
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const nameRegex = /^[a-zA-Z\s]+$/; // allows letters and spaces only
