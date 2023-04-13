import { View, Text, Image } from "react-native";
import React from "react";

const CheckoutItem = ({ product, index }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Image
        source={{ uri: product.images[0].url }}
        style={{ width: 50, height: 50, resizeMode: "contain" }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "900" }}> {product.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>{product.qty}</Text>
          <Text style={{ marginHorizontal: 10 }}>x</Text>
          <Text> ₹{product.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckoutItem;
