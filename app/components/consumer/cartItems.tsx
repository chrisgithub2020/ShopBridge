import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: string;
}

interface CardItemComponentProp {
  item: CartItem;
  openCompleteOrderModal: ()=>void
}

const CardItemComponent: React.FC<CardItemComponentProp> = ({ item, openCompleteOrderModal}) => {
  return (
    <TouchableOpacity onPress={openCompleteOrderModal} style={styles.item_container}>
      <View style={{ height: "100%" }}>
        <Image
          style={styles.image}
          source={require("../../../resources/file.png")}
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
            <View
              style={{
                flexDirection: "row",
                height: 40,
                width: 100,
                padding: 10,
                paddingTop: 12,
              }}
            >
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
    width: 40,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 6,
    paddingTop: 12,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 120,
  },
  item_container: {
    backgroundColor: "white",
    width: "100%",
    height: 160,
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
  },
});
