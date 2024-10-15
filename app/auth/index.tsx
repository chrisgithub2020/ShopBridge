import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/auth/create_consumer_acc");
        }}
      >
        <Ionicons name="cart" size={90} style={styles.button_text} />
        <Text style={styles.button_text}>Consumer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/auth/create_seller_acc");
        }}
      >
        <MaterialIcons name="store" size={90} style={styles.button_text} />
        <Text style={styles.button_text}>Seller</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#23263a",
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    width: "20%",
    height: "15%",
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: "#2196f3",
    borderRadius: 10,
  },
  button_text: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
  },
});
