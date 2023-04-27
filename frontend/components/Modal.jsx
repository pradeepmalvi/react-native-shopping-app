import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import { Children } from "react";

const Modal = ({ setOpenModal, background = colors.color2, render }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      zIndex: 100,
      backgroundColor: background,
      padding: 20, 
      borderRadius: 10,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 10, right: 10 }}
        onPress={() => setOpenModal(false)}
      >
        <Avatar.Icon
          icon={"close"}
          size={25}
          style={{ backgroundColor: colors.color1 }}
        ></Avatar.Icon>
      </TouchableOpacity>
      <View>{render}</View>
    </View>
  );
};

export default Modal;
