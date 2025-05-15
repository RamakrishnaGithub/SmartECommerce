import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { colors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/AppFonts";
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../../styles/sharedStyles";

type ProductCardProps = {
  onAddCartPress: () => void;
  imageURL: string;
  title: string;
  price: number | string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  onAddCartPress,
  imageURL,
  title,
  price,
}) => {
  return (
    <View style={styles.container}>
      {/* Add to cart button */}
      <TouchableOpacity style={styles.addToCart} onPress={onAddCartPress}>
        <Ionicons name="cart" size={s(17)} color={colors.white} />
      </TouchableOpacity>
      {/* image container */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageURL }} />
      </View>
      {/* detail container */}
      <View style={styles.detailscontainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>$ {price}</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: colors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailscontainer: {
    flex: 1,
    marginTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  title: {
    fontSize: s(14),
    fontFamily: AppFonts.medium,
    color: colors.primary,
  },
  price: {
    fontSize: s(14),
    fontFamily: AppFonts.bold,
    color: colors.primary,
    marginTop: vs(4),
  },
  addToCart: {
    width: s(26),
    height: vs(26),
    position: "absolute",
    backgroundColor: colors.primary,
    borderRadius: s(13),
    left: s(5),
    top: s(5),
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
