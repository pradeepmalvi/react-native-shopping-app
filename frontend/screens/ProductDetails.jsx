import React, { useRef } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-new-snap-carousel";

const sliderWidth = Dimensions.get("window").width;
const itemWidth = sliderWidth;

const ProductDetails = ({ route: { params } }) => {
  const isCarousel = useRef(null);

  const images = [
    {
      id: "453254",
      url: "https://cdn.shopify.com/s/files/1/0997/6284/products/1.1_165afbbc-34fc-4eeb-8f7e-c30e2bfec61d.png?v=1662181675",
    },
    {
      id: "64645",
      url: "https://pngimg.com/uploads/headphones/small/headphones_PNG101967.png",
    },
  ];
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
});

export default ProductDetails;
