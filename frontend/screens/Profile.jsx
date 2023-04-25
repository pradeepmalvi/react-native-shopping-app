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
import ButtonBox from "../components/ButtonBox";
import Loader from "../components/Loader";

const inputOptions = {
  style: {
    ...inputStyling,
  },
  mode: "outlined",
  activeOutlineColor: colors.color1,
  outlineColor: colors.color5,
};

const Profile = ({ navigation }) => {
  const [avatar, setAvatar] = useState(
    "https://avatars.githubusercontent.com/u/35966390?v=4"
  );
  const [name, setName] = useState("Pradeep Malviya");
  const [email, setEmail] = useState("itspradeepmalviya@gmail.com");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const disabledSignUp =
    !name || !email || !password || !address || !city || !country || !pincode;

  const loading = false;

  const logoutHandler = () => {
    console.log("logout");
  };

  const navigateHandler = (key) => {
    switch (key) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Logout":
        logoutHandler();
        break;
      default:
        navigation.navigate("orders");
        break;
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.color2 }}>
      <>{loading ? <Loader /> : <></>}</>
      <View
        style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Profile</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View>
              <Avatar.Image
                style={{
                  alignSelf: "center",
                  backgroundColor: colors.color1,
                  elevation: 8,
                }}
                size={80}
                source={{ uri: avatar ? avatar : defaultImg }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button
                  textColor={colors.color3}
                  labelStyle={{ fontWeight: "900" }}
                >
                  Edit Photo
                </Button>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15, marginLeft: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>{name}</Text>
              <Text style={{ fontWeight: "300" }}>{email}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 30,
            }}
          >
            <ButtonBox
              handler={navigateHandler}
              title="Orders"
              icon="format-list-bulleted-square"
            />
            <ButtonBox
              handler={navigateHandler}
              title="Admin"
              icon="view-dashboard"
              reverse={true}
            />
            <ButtonBox
              handler={navigateHandler}
              title="Profile"
              icon="pencil"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <ButtonBox
              handler={navigateHandler}
              title="Password"
              icon="pencil"
            />
            <ButtonBox
              handler={navigateHandler}
              title="Logout"
              icon="exit-to-app"
            />
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
});

export default Profile;
