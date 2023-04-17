import {
  View,
  Text,
  ViewBase,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Earbuds",
    price: "1999",
    _id: "w34535",
    stock: 10,
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_916612cd-a8da-408e-8ec6-b177df5fa727_1.png?v=1658150489",
      },
    ],
    qty: 1,
  },
  {
    name: "Headphones",
    price: "1399",
    _id: "45gfd",
    stock: 10,
    images: [
      {
        url: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-HD-Quality.png",
      },
    ],
    qty: 1,
  },
  {
    name: "Watch",
    price: "2999",
    _id: "26158",
    stock: 10,
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0997/6284/products/1.1_165afbbc-34fc-4eeb-8f7e-c30e2bfec61d.png?v=1662181675",
      },
    ],
    qty: 2,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = () => {};
  const decrementHandler = () => {};
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      {/* Header */}
      <Header back={true} emptyCart={true} />
      {/* Heading */}
      <Heading
        text1={"Shopping"}
        text2={"Cart"}
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((product, index) => (
            <CartItem
              index={index}
              key={index}
              product={product}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              navigate={navigate}
            ></CartItem>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "900" }}>5 Items</Text>
        <Text style={{ fontSize: 18, fontWeight: "900" }}>₹25000</Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("checkout") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon="cart"
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
