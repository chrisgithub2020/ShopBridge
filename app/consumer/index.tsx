import {
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context"
import { MaterialIcons } from "@expo/vector-icons";

const Products: ProductData[] = [
  { id: "1", store_name:"J.K. Electronics", name: "watch", price: "23" },
  { id: "2", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "3", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "v", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "d", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "i", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "w", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "p", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "q", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "g", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "r", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "4", store_name:"J.K. Electronics", name: "watch", price: "100" },
];

interface ProductData {
  id: string;
  name: string;
  price: string;
  store_name: string;
}

interface ComponentProp {
  product: ProductData;
}

const ProductComponent: React.FC<ComponentProp> = ({ product }) => {
  return (
    <View style={styles.product_container}>
      <View style={styles.product_image_container}>
        <Image
          style={styles.product_image}
          source={require("../../resources/file.png")}
        />
      </View>
      <View style={styles.product_desc_container}>
        <Text style={styles.store_name}>{product.store_name}</Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.text_price}>{product.name}</Text>
        <Text style={styles.text_price}>GH₵{product.price}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignSelf: "center",
              paddingBottom: 2,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </Text>
          <MaterialIcons
            style={{ color: "white", fontWeight: "bold", marginLeft: 5 }}
            name="shopping-cart"
            size={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ConsumerHome = () => {
  const screenWidth = Dimensions.get("window").width;
  const numColumns = Math.floor(screenWidth / 170);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Products}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => <ProductComponent product={item} />}
      />
    </SafeAreaView>
  );
};

export default ConsumerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#e6e1e1",
    paddingLeft: 10,
    paddingRight: 15,
  },
  product_container: {
    borderRadius: 7,
    padding: 5,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: 170,
  },
  product_image_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  product_image: {
    width: 150,
    height: 130,
  },
  product_desc_container: {
    padding: 3,
  },
  store_name: {
    backgroundColor: "#2196f3",
    borderRadius: 4,
    paddingLeft: 5,
    paddingBottom: 2,
    marginBottom: 3,
    marginTop: 3,
    width: 120,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "#2196f3",
    borderRadius: 5,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text_price: {
    color: "white",
    fontWeight: "bold",
  },
});
