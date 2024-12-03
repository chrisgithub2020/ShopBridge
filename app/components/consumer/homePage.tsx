import { Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import React from "react";
interface ProductData {
  id: string;
  name: string;
  price: string;
  store_name: string;
  photo: string;
}

interface ComponentProp {
  product: ProductData;
  onClick: () => void;
  addToCart: () => void;
}

const ProductComponent: React.FC<ComponentProp> = ({ product, onClick, addToCart}) => {
  const [cartButtonText, setCartButtonText] = useState<any>({"action":"Add To Cart", "icon":"shopping-cart"})
  let removeOrAdd = "add"
  return (
    <TouchableOpacity style={styles.product_container} onPress={onClick}>
      <View style={styles.product_image_container}>
        <Image
          style={styles.product_image}
          source={{uri:`data:image/png;base64,${product.photo}`}}
        />
      </View>
      <View style={styles.product_desc_container}>
        <Text style={styles.store_name}>{product.store_name}</Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.text_price}>
          {product.name}
        </Text>
        <Text style={styles.text_price}>GH₵{product.price}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{
        if (cartButtonText["action"] === "Remove"){
          setCartButtonText({"action":"Add To Cart", "icon":"shopping-cart"})
        } else {
          setCartButtonText({"action":"Remove", "icon":"delete"})
        }
        addToCart()
      }}>
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
            {cartButtonText["action"]}
          </Text>
          <MaterialIcons
            style={{ color: "white", fontWeight: "bold", marginLeft: 5 }}
            name={cartButtonText["icon"]}
            size={20}
          />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductComponent

const styles = StyleSheet.create({
  product_container: {
    borderRadius: 7,
    padding: 5,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: 170,
    elevation: 3,
  },
  product_image_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  product_image: {
    width: 150,
    height: 130,
    borderRadius: 5,
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
  text_price: {
    color: "black",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2196f3",
    borderRadius: 5,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
