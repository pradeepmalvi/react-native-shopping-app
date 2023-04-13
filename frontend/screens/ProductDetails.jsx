import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-new-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import { useState } from "react";
import Toast from "react-native-toast-message";

const sliderWidth = Dimensions.get("window").width;
const itemWidth = sliderWidth;

const ProductDetails = ({ route: { params } }) => {
  const [quantity, setQuantity] = useState(1);

  const isCarousel = useRef(null);
  const name = "Macbook PRO";
  const price = 120000;
  const stock = 5;
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore quibusdam illo ipsum tempore. Est nobis numquam blanditiis fugit inventore ullam doloremque iste voluptatibus, quas soluta quasi! Est dolorum, praesentium nam accusamus nesciunt beatae tenetur, sequi nihil debitis hic quam? Minus ex excepturi ad odit quisquam itaque.";

  const images = [
    {
      id: "453254",
      url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_916612cd-a8da-408e-8ec6-b177df5fa727_1.png?v=1658150489",
    },
    {
      id: "453254",
      url: "https://cdn.shopify.com/s/files/1/0997/6284/products/1.1_165afbbc-34fc-4eeb-8f7e-c30e2bfec61d.png?v=1662181675",
    },
    {
      id: "64645",
      url: "https://pngimg.com/uploads/headphones/small/headphones_PNG101967.png",
    },
  ];

  const incrementQty = () => {
    if (stock <= quantity) return;
    setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({ type: "error", text1: "Out Of Stock" });
    Toast.show({ type: "success", text1: "Added To Cart" });
  };
  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
    >
      <Header back={true} />
      {/* Carousel */}
      <Carousel
        layout="stack"
        ref={isCarousel}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        data={images}
        renderItem={CarouselCardItem}
      />

      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text style={{ fontSize: 25 }} numberOfLines={2}>
          {name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "900" }}>₹{price}</Text>
        <Text
          style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
          numberOfLines={8}
        >
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "400" }}>
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon
                icon="minus"
                size={20}
                style={{
                  borderRadius: 5,
                  backgroundColor: colors.color5,
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                backgroundColor: colors.color4,
                height: 25,
                width: 25,
                textAlignVertical: "center",
                textAlign: "center",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: colors.color5,
              }}
            >
              {quantity}
            </Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon
                icon="plus"
                size={20}
                style={{
                  borderRadius: 5,
                  backgroundColor: colors.color5,
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
          <Button icon={"cart"} style={style.btn} textColor={colors.color2}>
            Add to Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: itemWidth,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: itemWidth,
    resizeMode: "contain",
    height: 250,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;
