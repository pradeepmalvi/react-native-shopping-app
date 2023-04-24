import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { colors, defaultStyle } from "../../styles/styles";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ProductListHeading from "../../components/ProductListHeading";
import { products } from "../Home";
import ProductListItem from "../../components/ProductListItem";

const AdminPanel = ({ navigation }) => {
  const loading = false;

  const navigateHandler = () => {};

  const deleteHandler = (id) => {}
  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
        paddingHorizontal: 0,
      }}
    >
      <Header back={true} />
      <View style={{ paddingHorizontal: 35 }}>
        <View style={{ paddingTop: 100 }}>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Admin Panel</Text>
        </View>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}
          >
            <ButtonBox
              handler={navigateHandler}
              title="All Orders"
              icon="format-list-bulleted-square"
              reverse={true}
            />
            <ButtonBox handler={navigateHandler} title="Product" icon="plus" />
            <ButtonBox handler={navigateHandler} title="Category" icon="plus" />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}
          >
            <ProductListHeading />

            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                {products.map((item, index) => (
                  <ProductListItem
                    product={item}
                    key={index}
                    index={index}
                    navigation={navigation}
                    deleteHandler={deleteHandler}
                  />
                ))}
              </View>
              
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};

export default AdminPanel;
