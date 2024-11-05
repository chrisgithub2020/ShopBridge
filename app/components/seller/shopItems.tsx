import { View, Text, TouchableOpacity, Image, StyleSheet, NativeSyntheticEvent } from "react-native";

interface StoreProduct {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

interface StoreProductProp {
  product: StoreProduct;
  onRestock: () => void;
  onTakeDown: () => void;
}
const ProductComponent: React.FC<StoreProductProp> = ({ product, onRestock, onTakeDown }) => {
  return (
    <View style={styles.supplies_container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={styles.image}
            source={require("../../../resources/file.png")}
          />
        </View>
        <View style={styles.abt_container}>
          <Text style={{ height: "40%", marginTop: 10 }}>{product.name}</Text>
          <Text style={{ height: "17%" }}>{product.price}</Text>
          <Text style={{ height: "17%" }}>{product.quantity}</Text>
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
  },
  supplies_button_test: {
    padding: 8,
    justifyContent: "center",
    alignSelf: "center",
  },
  image: {
    height: 150,
    width: 150,
  },
  abt_container: {
    flexDirection: "column",
  },
  supplies_container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 7,
    height: 200,
    marginTop: 6,
  },
});
