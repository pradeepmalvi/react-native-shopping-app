import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultImg,
  defaultStyle,
  inputStyling,
} from "../styles/styles";
import { StyleSheet } from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const inputOptions = {
  style: {
    ...inputStyling,
  },
  mode: "outlined",
  activeOutlineColor: colors.color1,
  outlineColor: colors.color5,
};

const SignUp = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const disabledSignUp =
    !name || !email || !password || !address || !city || !country || !pincode;

  const loading = false;

  const submitHandler = () => {};
  return (
    <View style={{ flex: 1, backgroundColor: colors.color2 }}>
      <View
        style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
      >
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text style={styles.heading}>Sign Up</Text>
            </View>
            <Avatar.Image
              style={{
                alignSelf: "center",
                backgroundColor: colors.color1,
                elevation: 8,
              }}
              size={80}
              source={{ uri: avatar ? avatar : defaultImg }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color3}>Change Photo</Button>
            </TouchableOpacity>
            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              {...inputOptions}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              {...inputOptions}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />
            <TextInput
              {...inputOptions}
              placeholder="Pincode"
              value={pincode}
              onChangeText={setPincode}
            />
            <TouchableOpacity
              style={styles.forget}
              onPress={() => navigation.navigate("forgetpassword")}
              activeOpacity={0.8}
            >
              <Text>Forget Password?</Text>
            </TouchableOpacity>

            <Button
              loading={loading}
              textColor={colors.color2}
              disabled={disabledSignUp}
              style={styles.btn}
              labelStyle={{ fontWeight: "900" }}
              onPress={submitHandler}
            >
              Sign Up
            </Button>

            <View style={styles.link}>
              <Text style={{ fontSize: 16 }}>Already have an account?</Text>
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
        </ScrollView>
      </View>
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
    height: "auto",
    paddingHorizontal: 20,
    paddingVertical: 50,
    marginTop: 100,
    backgroundColor: colors.color2,
    borderTopLeftRadius: 50,
    justifyContent: "flex-start",
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

export default SignUp;
