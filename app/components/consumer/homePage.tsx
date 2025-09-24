import { Text, Image, TouchableOpacity, View, StyleSheet, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import React from "react";
import { ProductData } from "@/constants/types";
import getItemImage from "@/api_calls/consumer/fetchImage";

const ProductComponent = ({ product, onClick, addToCart, inCart}: {product: ProductData, onClick: ()=> void, addToCart: ()=>void, inCart: boolean}) => {
  const [cartButtonText, setCartButtonText] = useState<any>(inCart? {"action":"Remove", "icon":"delete"}:{"action":"Add To Cart", "icon":"shopping-cart"})
  const [imageLoading, setImageLoading] = useState<boolean>(true)
  const [image, setImage] = useState<string>("")

  if (imageLoading) {
    getItemImage(product.photo).then((image)=>{
      product.photo = image
      setImageLoading(false)
    })
  }

  return (
    <TouchableOpacity style={styles.product_container} onPress={onClick}>
      <View style={styles.product_image_container}>
        <Image
          style={styles.product_image}
          source={{uri:`data:image/png;base64,${image}`}}
        />
        {imageLoading && <ActivityIndicator style={{ flex: 1, position: "absolute"}} size="small" color="black" />}
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
        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
          <Text
            style={{
              flex: 0.65,
              flexDirection: "row",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {cartButtonText["action"]}
          </Text>
          <MaterialIcons
            style={{color: "white", fontWeight: "bold"}}
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
    backgroundColor: "white",
    width: "45%",
    elevation: 3,
    margin: 'auto',
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
