import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { SetStateAction, useState } from "react";
import React from "react";

interface CartItem {
  photo: string;
  id: string;
  name: string;
  price: string;
  quantity: string;
}

interface CardItemComponentProp {
  item: CartItem;
  openCompleteOrderModal: ()=>void;
  removeFromCart: ()=>void;
}

const CardItemComponent: React.FC<CardItemComponentProp> = ({ item, openCompleteOrderModal, removeFromCart}) => {
  const [quantityDefaultValue, setQuantityDefaultValue] = useState("1")
  return (
    <TouchableOpacity onPress={()=>{
      console.log(item.quantity)
      openCompleteOrderModal()
    }} style={styles.item_container}>
      <View style={{flexDirection: "row", flex:1, justifyContent: "space-between", padding: 5}}>
        <View style={{ height: "100%" }}>
          <Image resizeMode="contain"
            style={styles.image}
            source={{uri:`data:image/png;base64,${item.photo}`}}
          />
        </View>
        <View style={{  width: "73%", flex: 1, }}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={{
              color: "black",
              width: "96%",
              fontWeight: "bold",
              padding: 5,
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
              padding: 4,
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
              margin: 4.5,
            }}
          >
            <TouchableOpacity onPress={removeFromCart}
              style={{
                backgroundColor: "#2196f3",
                borderRadius: 5,
                height: "90%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  width: 100,
                  padding: 6,
                }}
              >
                <MaterialIcons
                  size={20}
                  name="delete"
                  style={{
                    color: "white",
                    justifyContent: "center",
                    fontWeight: "bold",
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Remove
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <TouchableOpacity onPress={()=>{
                setQuantityDefaultValue(String(Number(item.quantity)-1))
                item.quantity = String(Number(item.quantity) - 1)
                if (Number(item.quantity) <= 0){
                  setQuantityDefaultValue("1")
                  item.quantity = "1"
                }
              }} style={styles.quantity_button}>
                <MaterialIcons
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "center",
                  }}
                  size={23}
                  name="remove"
                />
              </TouchableOpacity>
              <TextInput keyboardType="numeric" onChangeText={(text: string)=>{
                setQuantityDefaultValue(text)
                item.quantity = text;
              }} onBlur={(event)=>{
                if (item.quantity === "" || item.quantity === "0"){
                  setQuantityDefaultValue("1")
                }
              }} value={quantityDefaultValue} style={styles.quantity_text} defaultValue="1"/>
              <TouchableOpacity onPress={()=>{
                setQuantityDefaultValue(String(Number(item.quantity)+1))
                item.quantity = String(Number(item.quantity) + 1)
                }} style={styles.quantity_button}>
                <MaterialIcons
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "center",
                  }}
                  size={23}
                  name="add"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItemComponent

const styles = StyleSheet.create({
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
    width: 45,
    margin:3,
    color: "black",
    alignSelf: "center",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 120,
  },
  item_container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    height: 130
  },
});
