import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context"
import CardItemComponent from "../components/consumer/cartItems"

const data:CartItem[] = [
    {id: "1", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "3", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "2", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "6", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "5", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "4", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "7", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "8", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "9", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
    {id: "a", name: "East Moon Minoxidil 60ml x3 bottles plus 0.5mm derma roller system",price: "100",quantity:"3"},
];

interface CartItem {
    id: string;
    name: string;
    price: string;
    quantity: string;
}


const cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.items_scroll} data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => <CardItemComponent item={item} />}/>
    </SafeAreaView>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e1e1",
    flex: 1,
  },
  image: {
    width: 100,
    height: 120,
  },
  items_scroll: {
    paddingLeft: 10,
    paddingRight: 9,
  },
  item_container: {
    backgroundColor: "white",
    width:"100%",
    height: 160,
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
    padding:5,
  },
  quantity_button: {
    backgroundColor: "#2196f3",
    width: 47,
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderRadius: 4,
  },
  quantity_text: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: 40,
    marginLeft: 4,
    marginRight: 4,
    marginBottom:6,
    paddingTop:12,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
});
