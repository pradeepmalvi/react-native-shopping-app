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

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loading = false;

  const submitHandler = () => {};
  return (
    <View style={{ flex: 1, backgroundColor: colors.color2 }}>
      <Header back={true} />
      <View
        style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Change Password </Text>
          </View>
          <TextInput
            {...inputOptions}
            placeholder="Old Password"
            value={oldPassword}
            onChangeText={setOldPassword}
            secureTextEntry={true}
          />
          <TextInput
            {...inputOptions}
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={true}
          />
          <TextInput
            {...inputOptions}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={oldPassword === "" || newPassword === "" || confirmPassword === "" }
            style={styles.btn}
            labelStyle={{ fontWeight: "900" }}
            onPress={submitHandler}
          >
            Update Password
          </Button>
        </View>
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
    // height:680,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    marginTop: 100,
    backgroundColor: colors.color2,
    borderTopLeftRadius: 50,
    justifyContent: "flex-start",
    elevation: 0,
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
    borderRadius: 5,
    fontSize: 10,
    fontWeight: "900",
  },
});

export default ChangePassword;
