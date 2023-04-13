import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const CartItem = ({ product, index, incrementHandler, decrementHandler }) => {
  return (
    <View style={{ flexDirection: "row", height: 100, marginVertical: 20 }}>
      <View
        style={{
          width: "30%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image
          source={{ uri: product.images[0].url }}
          style={{
            width: 200,
            height: "100%",
            resizeMode: "contain",
            top: "-20%",
            left: "-30%",
          }}
        />
      </View>
      <View
        style={{
          width: "50%",
          paddingHorizontal: 25,
          justifyContent: "center",
        }}
      >
        <Text numberOfLines={1} style={{ fontSize: 18 }}>
          {product.name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: "900" }}>
          ₹{product.price}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "20%",
          height: 80,
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={() => decrementHandler(product._id)}>
          <Avatar.Icon
            icon={"minus"}
            size={20}
            style={{
              borderRadius: 5,
              backgroundColor: colors.color5,
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            backgroundColor: colors.color4,
            height: 25,
            width: 25,
            textAlignVertical: "center",
            textAlign: "center",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: colors.color5,
          }}
        >
          {product.qty}
        </Text>
        <TouchableOpacity onPress={() => incrementHandler(product._id)}>
          <Avatar.Icon
            icon={"plus"}
            size={20}
            style={{
              borderRadius: 5,
              backgroundColor: colors.color5,
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
