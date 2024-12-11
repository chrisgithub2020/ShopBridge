import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, NativeSyntheticEvent } from "react-native";

interface StoreProduct {
  id: string;
  name: string;
  quantity: string;
  price: string;
  photo: string;
  description: string;
}

interface StoreProductProp {
  product: StoreProduct;
  onRestock: () => void;
  onTakeDown: () => void;
}
const ProductComponent: React.FC<StoreProductProp> = ({ product, onRestock, onTakeDown }) => {
  return (
    <View style={styles.supplies_container}>
      <View style={{ flexDirection: "row", padding: 5}}>
        <View>
          <Image
            style={styles.image}
            source={{uri:`data:image/png;base64,${product.photo}`}}
          />
        </View>
        <View style={styles.abt_container}>
          <Text style={{fontWeight: "bold"}}>{product.name}</Text>
          <Text adjustsFontSizeToFit numberOfLines={3} ellipsizeMode="tail" style={{fontSize:12, width:120}}>{product.description}</Text>
          <Text style={{fontWeight: "bold"}}>Price: GH₵{product.price}</Text>
          <Text style={{fontWeight: "bold"}}>Quantity: {product.quantity}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.supplies_button} onPress={onTakeDown}>
          <Text style={styles.supplies_button_test}>Take Down</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supplies_button} onPress={onRestock}>
          <Text style={styles.supplies_button_test}>Restock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductComponent

const styles = StyleSheet.create({
  supplies_button: {
    backgroundColor: "#2196f3",
    width: "45%",
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    elevation: 5
  },
  supplies_button_test: {
    alignSelf: "center",
  },
  image: {
    height: 135,
    width: 150,
    borderRadius: 5,
  },
  abt_container: {
    flexDirection: "column",
    paddingLeft: 8,
    justifyContent: "space-around"
  },
  supplies_container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 7,
    height: 200,
    marginTop: 6,
  },
});
