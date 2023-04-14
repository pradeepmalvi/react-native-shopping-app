import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { colors, defaultStyle } from "../styles/styles";
import { Button, RadioButton } from "react-native-paper";
import { useState } from "react";

const Payment = ({ route, navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const isAuthenticated = true;

  const redirectToLogin = () => {
    navigation.navigate("login");
  };
  
  const codHandler = () => {};

  const onlineHandler = () => {};

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="Payment"
        text2="Method"
      />
      <View style={styles.container}>
        <RadioButton.Group
          value={paymentMethod}
          onValueChange={setPaymentMethod}
        >
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Cash On Delivery</Text>
            <RadioButton color={colors.color1} value="COD"></RadioButton>
          </View>
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Online</Text>
            <RadioButton color={colors.color1} value="ONLINE"></RadioButton>
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        onPress={
          !isAuthenticated
            ? redirectToLogin
            : paymentMethod === "COD"
            ? codHandler
            : onlineHandler
        }
      >
        <Button
          style={styles.btn}
          textColor={colors.color2}
          icon={
            paymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"
          }
        >
          {paymentMethod === "COD" ? "Place Order" : "Pay"}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: "600",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color2,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});

export default Payment;
