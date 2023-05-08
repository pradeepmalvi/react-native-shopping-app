import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors, defaultStyle, inputOptions } from "../../styles/styles";
import Header from "../../components/Header";
import { useState } from "react";
import { Avatar, Button, TextInput } from "react-native-paper";
import Modal from "../../components/Modal";
import OrderItems from "../../components/OrderItems";
import { ordersData } from "../Orders";

const AdminOrders = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processOrderLoading, setProcessOrderLoading] = useState("");

  const updateHandler = () => {};
  return (
    <>
      <ScrollView>
        <View
          style={{
            ...defaultStyle,
            backgroundColor: colors.color5,
            paddingHorizontal: 0,
          }}
        >
          <Header back={true} />
          <View style={{ paddingHorizontal: 35 }}>
            <View
              style={{
                paddingTop: 100,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "900" }}>
                All Orders
              </Text>
            </View>
          </View>

          {loading ? (
            <Loader />
          ) : (
            <>
              <View
                style={{
                  backgroundColor: colors.color2,
                  padding: 20,
                  margin: 20,
                  borderRadius: 10,
                }}
              >
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
                      admin={true}
                      updateHandler={() => updateHandler()}
                      loading={processOrderLoading}
                    />
                  ))
                ) : (
                  <Headline style={{ textAlign: "center", padding: 20 }}>
                    No Orders Yet{" "}
                  </Headline>
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default AdminOrders;
