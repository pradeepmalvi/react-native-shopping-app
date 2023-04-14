import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { cartItems } from "./Cart";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import CheckoutItem from "../components/CheckoutItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const Checkout = () => {
  const navigate = useNavigation();
  const itemsPrice = 4000;
  const shippingCharges = 200;
  const tax = 0.18 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} />
      <Heading
        text1="Confirm"
        text2="Order"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />
      <View style={{ paddingVertical: 20, paddingHorizontal: 20, flex: 1 }}>
        <ScrollView>
          {cartItems.map((product, index) => (
            <CheckoutItem product={product} index={index} key={index} />
          ))}
        </ScrollView>
      </View>
      <View style={{ paddingHorizontal: 35 }}>
        <PriceTag heading={"Subtotal"} value={itemsPrice} />
        <PriceTag heading={"Shipping"} value={shippingCharges} />
        <PriceTag heading={"tax"} value={tax} />
        <PriceTag heading={"Total"} value={totalAmount} />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          textColor={colors.color2}
          icon={"chevron-right"}
        > 
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "900" }}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

export default Checkout;
