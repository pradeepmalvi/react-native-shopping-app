import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../styles/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Button } from "react-native-paper";

const OrderItems = ({
  id,
  price,
  address,
  orderedOn,
  status,
  paymentMethod,
  updateHandler,
  admin = false,
  loading = false,
  i = 0,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.color2,
      }}
    >
      <Text
        style={{
          ...styles.text,
          color: colors.color2,
          backgroundColor: colors.color1,
        }}
      >
        ID - #{id}
      </Text>
      <TextBox i={i} title={"Address"} value={address} />
      <TextBox i={i} title={"Ordered On"} value={orderedOn} />
      <TextBox i={i} title={"Price"} value={price} />
      <TextBox i={i} title={"Status"} value={status} />
      <TextBox i={i} title={"Payment Method"} value={paymentMethod} />

      {admin && (
        <Button
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color3,
            marginTop: 20,
            borderRadius: 10,
          }}
          icon="update"
          labelStyle={{ fontWeight: "900" }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}
        >
          Update
        </Button>
      )}
    </View>
  );
};

const TextBox = ({ title, value, i }) => (
  <Text
    style={{
      marginVertical: 6,
      color: colors.color3,
    }}
  >
    <Text style={{ fontWeight: "900" }}>{title} - </Text>
    {title === "Price" ? `₹${value}` : value}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
  },
  text: {
    color: colors.color2,
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
  },
});

export default OrderItems;
