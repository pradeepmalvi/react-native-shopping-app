import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItems from "../components/OrderItems";

export const ordersData = [
  {
    _id: "aksdjfla",
    shippingInfo: {
      address: "73, easter view",
      city: "New York",
      country: "USA",
      pincode: "202332",
    },
    createdAt: "12-5-23",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 10099,
  },
  {
    _id: "a5645fla",
    shippingInfo: {
      address: "73, easter view",
      city: "New York",
      country: "USA",
      pincode: "202332",
    },
    createdAt: "12-5-23",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 10099,
  },
];

const Orders = () => {
  const loading = false;
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <Heading text1="My" text2="Orders" containerStyle={{ paddingTop: 80 }} />
      {loading ? (
        <Loader />
      ) : (
        <View style={{ paddingVertical: 10 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {ordersData.length > 0 ? (
              ordersData.map((item, index) => (
                <OrderItems
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pincode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center", padding: 20 }}>
                No Orders Yet{" "}
              </Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
