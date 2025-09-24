import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { SetStateAction, useState } from "react";
import React from "react";
import { CartItem } from "@/constants/types";
import getItemImage from "@/api_calls/consumer/fetchImage";

interface CardItemComponentProp {
  item: CartItem;
  openCompleteOrderModal: () => void;
  removeFromCart: () => void;
}

const CardItemComponent: React.FC<CardItemComponentProp> = ({ item, openCompleteOrderModal, removeFromCart }) => {
  const [quantityDefaultValue, setQuantityDefaultValue] = useState("1")
  const [image, setImage] = useState<string>("")
  const [imageLoading, setImageLoading] = useState<boolean>(true)

  getItemImage(item.photoId).then((image)=>{
      setImage(image)
      setImageLoading(false)
  })

  return (
    <TouchableOpacity onPress={() => {
      console.log(item.quantity)
      openCompleteOrderModal()
    }} style={styles.item_container}>
      <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around", padding: 4}}>
        <View style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}>
          <Image resizeMode="contain"
            style={styles.image}
            // source={require("../../../resources/no_internet.png")}
            source={{ uri: `data:image/png;base64,${image}` }}
          />
          {imageLoading && <ActivityIndicator style={{ flex: 1, position: "absolute"}} size="small" color="black" />}
        </View>
        <View style={{flex: 1, }}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={{
              color: "black",
              width: "auto",
              fontWeight: "bold",
              padding: 5,
              flex:0.8,
              marginTop: 3,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              width: "auto",
              color: "black",
              padding: 4,
            }}
          >
            GH₵ {item.price}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row",padding:4, justifyContent: "space-around"}}>
        <TouchableOpacity onPress={removeFromCart}
          style={{
            backgroundColor: "#2196f3",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center", 
            justifyContent: "center",
            flex: 1
          }}
        >
          <MaterialIcons
            size={20}
            name="delete"
            style={{
              color: "white",
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
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginLeft: 5, justifyContent: "space-between", alignItems: "stretch" }}>
          <TouchableOpacity onPress={() => {
            setQuantityDefaultValue(String(Number(item.quantity) - 1))
            item.quantity = String(Number(item.quantity) - 1)
            if (Number(item.quantity) <= 0) {
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
          <TextInput keyboardType="numeric" onChangeText={(text: string) => {
            setQuantityDefaultValue(text)
            item.quantity = text;
          }} onBlur={(event) => {
            if (item.quantity === "" || item.quantity === "0") {
              setQuantityDefaultValue("1")
            }
          }} value={quantityDefaultValue} style={styles.quantity_text} defaultValue="1" />
          <TouchableOpacity onPress={() => {
            setQuantityDefaultValue(String(Number(item.quantity) + 1))
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
    </TouchableOpacity>
  );
};

export default CardItemComponent

const styles = StyleSheet.create({
  quantity_button: {
    backgroundColor: "#2196f3",
    width: 47,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderRadius: 4,
  },
  quantity_text: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: 45,
    margin: 3,
    color: "black",
    alignSelf: "center",
    textAlign: "center",
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  },
  item_container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 1
  },
});
