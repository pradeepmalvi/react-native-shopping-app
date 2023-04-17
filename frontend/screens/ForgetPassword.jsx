import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, inputStyling } from "../styles/styles";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const inputOptions = {
  style: {
    ...inputStyling,
  },
  mode: "outlined",
  activeOutlineColor: colors.color1,
  outlineColor: colors.color5,
};

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    navigation.navigate("verifypassword");
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.color2 }}>
      <View
        style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Forget Password</Text>
          </View>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={email === ""}
            style={styles.btn}
            labelStyle={{ fontWeight: "900" }}
            onPress={submitHandler}
          >
            Send OTP
          </Button>

          <View style={styles.link}>
            <Text style={{ fontSize: 16 }}>Go to</Text>
            <Button onPress={() => navigation.navigate("login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.color1,
                  fontWeight: "900",
                }}
              >
                Login
              </Text>
            </Button>
          </View>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    borderRadius: 5,
    marginBottom: 50,
  },
  container: {
    height: 550,
    padding: 20,
    backgroundColor: colors.color2,
    borderTopLeftRadius: 50,
    justifyContent: "center",
    elevation: 0,
  },
  forget: {
    color: colors.color2,
    marginVertical: 10,
    marginHorizontal: 20,
    alignSelf: "flex-end",
    fontWeight: "100",
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
    borderRadius: 5,
    fontSize: 10,
    fontWeight: "900",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default ForgetPassword;
