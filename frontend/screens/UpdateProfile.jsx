import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, inputStyling } from "../styles/styles";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";

const inputOptions = {
  style: {
    ...inputStyling,
  },
  mode: "outlined",
  activeOutlineColor: colors.color1,
  outlineColor: colors.color5,
};

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const disabledSignUp =
    !name || !email || !address || !city || !country || !pincode;

  const loading = false;

  const submitHandler = () => {};
  return (
    <View style={{ flex: 1, backgroundColor: colors.color2 }}>
      <Header back={true} />
      <View
        style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
      >
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text style={styles.heading}>Edit Profile </Text>
            </View>

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

            <Button
              loading={loading}
              textColor={colors.color2}
              disabled={disabledSignUp}
              style={styles.btn}
              labelStyle={{ fontWeight: "900" }}
              onPress={submitHandler}
            >
              Update Profile
            </Button>
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

export default UpdateProfile;
