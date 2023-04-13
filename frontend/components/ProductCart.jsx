import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Button } from "react-native-paper";

const ProductCart = ({
  id,
  name,
  image,
  price,
  stock,
  addToCartHandler,
  index,
  navigate,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigate.navigate("productdetails", { id })}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 10,
          height: 400,
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 105,
          }}
        />
        <View
          style={{
            padding: 20,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: index % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: index % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            ₹{price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: index % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            width: "100%",
          }}
        >
          <Button
            onPress={() => addToCartHandler(id, stock)}
            textColor={index % 2 === 0 ? colors.color1 : colors.color2}
            icon="cart"
            labelStyle={{ fontWeight: "900" }}
          >
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCart;
