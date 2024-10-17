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
import { MaterialIcons } from "@expo/vector-icons";

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

interface CardItemComponentProp {
    item: CartItem;
}

const CardItemComponent:React.FC<CardItemComponentProp> = ({item}) => {
  return (
    <View style={styles.item_container}>
      <View style={{ height: "100%" }}>
        <Image
          style={styles.image}
          source={require("../../resources/file.png")}
        />
      </View>
      <View style={{ height: "100%", width: "73%" }}>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{
            color: "black",
            width: "96%",
            fontWeight: "bold",
            height: 50,
            paddingRight: 10,
            marginLeft: 4,
            marginRight: 5,
          }}
        >
        {item.name}
        </Text>
        <Text
          style={{
            justifyContent: "center",
            fontWeight: "bold",
            width: "96%",
            color: "black",
            height: "20%",
            padding: 5,
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 4,
          }}
        >
          {item.price}
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "96%",
            height: "40%",
            paddingTop: 7,
            marginLeft: 4,
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#2196f3",
              borderRadius: 5,
              height: "90%",
            }}
          >
            <View style={{ flexDirection: "row", height: 40, width: 100, padding:10, paddingTop: 12,}}>
              <MaterialIcons
                size={20}
                name="delete"
                style={{
                  color: "white",
                  justifyContent: "center",
                  fontWeight: "bold",
                  alignSelf: "center",
                  marginRight: 3,
                }}
              />
              <Text
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Remove
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginLeft: 5, marginRight: 5 }}>
            <TouchableOpacity style={styles.quantity_button}>
              <MaterialIcons
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
                size={23}
                name="remove"
              />
            </TouchableOpacity>
            <Text style={styles.quantity_text}>{item.quantity}</Text>
            <TouchableOpacity style={styles.quantity_button}>
              <MaterialIcons
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
                size={23}
                name="add"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
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
