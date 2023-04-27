import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors, defaultStyle, inputOptions } from "../../styles/styles";
import Header from "../../components/Header";
import { useState } from "react";
import { Avatar, Button, TextInput } from "react-native-paper";
import Modal from "../../components/Modal";

const Categories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const categories = [
    { _id: "oieryew", name: "Laptop" },
    { _id: "oier4352yew", name: "Electronics" },
    { _id: "oie43523ryew", name: "Phones" },
    { _id: "345dfgsd", name: "Wearables" },
  ];

  const deleteHandler = (id) => {
    console.log("delete category");
  };

  const submitHandler = () => {};
  return (
    <>
      <ScrollView>
        <View
          style={{
            ...defaultStyle,
            backgroundColor: colors.color5,
            paddingHorizontal: 0,
          }}
        >
          <Header back={true} />
          <View style={{ paddingHorizontal: 35 }}>
            <View
              style={{
                paddingTop: 100,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "900" }}>
                Categories
              </Text>
              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  paddingVertical: 2,
                  paddingHorizontal: 10,
                }}
                onPress={() => setOpenModal(true)}
              >
                Add
              </Button>
            </View>
          </View>

          {openModal && (
            <View style={{ paddingHorizontal: 20 }}>
              <Modal
                deleteHandler={deleteHandler}
                setOpenModal={setOpenModal}
                render={
                  <View style={styles.container}>
                    <TextInput
                      {...inputOptions}
                      placeholder="Category"
                      value={category}
                      onChangeText={setCategory}
                    />
                    <Button
                      textColor={colors.color2}
                      style={{
                        backgroundColor: colors.color1,
                        margin: 20,
                        padding: 6,
                        borderRadius: 10,
                      }}
                      disabled={!category}
                      onPress={submitHandler}
                    >
                      Add
                    </Button>
                  </View>
                }
              />
            </View>
          )}

          {loading ? (
            <Loader />
          ) : (
            <>
              <View
                style={{
                  backgroundColor: colors.color2,
                  padding: 20,
                  margin: 20,
                  borderRadius: 10,
                }}
              >
                {categories.map((category, index) => (
                  <CategoryCard
                    key={index}
                    index={index}
                    category={category}
                    deleteHandler={deleteHandler}
                  />
                ))}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const CategoryCard = ({ category, deleteHandler }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{category.name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(category._id)}>
      <Avatar.Icon
        icon={"delete"}
        size={30}
        style={{ backgroundColor: colors.color1 }}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
  },
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default Categories;
