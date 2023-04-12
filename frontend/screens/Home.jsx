import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCart from "../components/ProductCart";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigation();

  const categories = [
    { category: "Men", _id: "12325" },
    { category: "Women", _id: "i3u23" },
    { category: "Kids", _id: "i5483" },
  ];

  const products = [
    {
      name: "Earbuds",
      price: "2000",
      _id: "w34535",
      stock: 10,
      images: [
        {
          url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_916612cd-a8da-408e-8ec6-b177df5fa727_1.png?v=1658150489",
        },
      ],
    },
    {
      name: "Headphones",
      price: "1200",
      _id: "45gfd",
      stock: 10,
      images: [
        {
          url: "https://pngimg.com/uploads/headphones/small/headphones_PNG101967.png",
        },
      ],
    },
    {
      name: "Phone",
      price: "2500",
      _id: "26158",
      stock: 10,
      images: [
        {
          url: "https://i.ibb.co/wRfXDw3/image.png",
        },
      ],
    },
  ];

  const [category, setCategory] = useState();
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id) => {
    console.log("addtocart", id);
  };
  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
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
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
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

        {/* Products*/}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((product, index) => (
              <ProductCart
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.images[0]?.url}
                stock={product.stock}
                addToCartHandler={() => addToCartHandler(product._id)}
                key={product._id}
                index={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Footer */}
      <Footer activeRoute="home"/>
    </>
  );
};

export default Home;