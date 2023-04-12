import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";

const Home = () => {
  const categories = [
    { category: "Men", _id: "12325" },
    { category: "Women", _id: "i3u23" },
    { category: "Kids", _id: "i5483" },
  ];

  const [category, setCategory] = useState();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };
  return (
    <View style={defaultStyle}>
      <Header />
      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <View>
          <Text style={{ fontSize: 25 }}>Our </Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>
        {/* Search Bar */}
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              color={"gray"}
              size={50}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={{ flexDirection: "row", height: 80 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {categories.map((item, index) => (
            <Button
              key={item._id}
              style={{
                backgroundColor:
                  category === item._id ? colors.color1 : colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => categoryButtonHandler(item._id)}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: category === item._id ? colors.color2 : "gray",
                }}
              >
                {item.category}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
