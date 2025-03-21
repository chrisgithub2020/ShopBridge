import React, { useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import Link from "@/api_calls/serverLink";


const About = ({navigation}: {navigation: any}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../../resources/icon.png")} />
      <Text style={styles.text_rhetorical}>
        Want to Shop from ShopBridge or Sell on ShopBridge?
      </Text>
      <View style={styles.paragraph}>
        <Text style={styles.text_support}>
          Join the ShopBridge community today and unlock endless opportunities!
          Whether you’re here to discover amazing products or grow your
          business, we’ve got you covered. Sign up now and start your journey to
          a seamless shopping and selling experience—all in one place!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("choose")
          }}
        >
          <Text style={styles.text_sign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 10, marginBottom: 10 }}></Text>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  image: { height: "50%", width: "100%", marginTop: 20 },
  text_rhetorical: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
  text_support: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    lineHeight: 24,
    padding: 15,
    borderRadius: 8,
    fontFamily: "System",
  },
  paragraph: { padding: 10 },
  text_sign: { justifyContent: "center", alignSelf: "center", color: "white" },
  button: {
    paddingTop: 10,
    backgroundColor: "#2196f3",
    height: 40,
    marginTop: 10,
    borderRadius:5,
  },
  container: { backgroundColor: "#23263a", flex: 1 },
});
