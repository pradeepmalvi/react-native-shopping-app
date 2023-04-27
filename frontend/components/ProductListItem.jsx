import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { useState } from "react";
import Modal from "./Modal";
import { Button } from "react-native-paper";

const ProductListItem = ({ product, navigation, deleteHandler, index }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOpenModal(!openModal)}
        onPress={() =>
          navigation.navigate("productdetails", { id: product._id })
        }
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          }}
        >
          <Image
            source={{ uri: product.images[0]?.url }}
            style={{ width: 40, height: 40, resizeMode: "contain" }}
          />
          <Text style={{ width: 60, color: colors.color2 }} numberOfLines={1}>
            ₹{product.price}
          </Text>
          <Text
            style={{ maxWidth: 120, color: colors.color2 }}
            numberOfLines={1}
          >
            {product.name}
          </Text>
          <Text
            style={{ maxWidth: 60, color: colors.color2 }}
            numberOfLines={1}
          >
            {product.category}
          </Text>
          <Text
            style={{ maxWidth: 40, color: colors.color2 }}
            numberOfLines={1}
          >
            {product.stock}
          </Text>
        </View>
      </TouchableOpacity>

      {openModal && (
        <Modal
          deleteHandler={deleteHandler}
          setOpenModal={setOpenModal}
          render={
            <View style={{ textAlign: "center" }}>
              <Text
                style={{
                  fontWeight: "900",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
                onPress={() =>
                  navigation.navigate("updateproduct", { id: product._id })
                }
              >
                Edit
              </Text>
              <Button
                textColor={colors.color3}
                onPress={() => deleteHandler({ id: product._id })}
              >
                Delete
              </Button>
            </View>
          }
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default ProductListItem;
