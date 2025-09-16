import React, { useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions , ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const appHeight = Dimensions.get("window").height
const appWidth = Dimensions.get("window").width

const About = ({navigation}: {navigation: any}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  image: { height: appHeight*0.5, width: "auto", marginTop: 20 },
  text_rhetorical: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    paddingLeft: appWidth*0.05,
    paddingRight: appWidth*0.05,
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
  paragraph: { padding: (appWidth*0.025) },
  text_sign: { justifyContent: "center", alignSelf: "center", color: "white" },
  button: {
    backgroundColor: "#2196f3",
    height: appHeight*0.05,
    borderRadius:5,
    justifyContent: "center"
  },
  container: { backgroundColor: "#23263a", flex: 1},
});
