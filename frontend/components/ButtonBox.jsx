import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const ButtonBox = ({ title, icon, reverse, handler, loading = false }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        backgroundColor: reverse ? colors.color1 : colors.color3,
        height: 90,
        width: 100,
        margin: 10,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
      }}
      onPress={() => handler(title)}
      disabled={loading}
    >
      <Avatar.Icon
        size={50}
        color={colors.color2}
        style={{ backgroundColor: "transparent" }}
        icon={icon}
      />
      <Text style={{ color: colors.color2, textAlign: "center", fontSize: 12 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonBox;
