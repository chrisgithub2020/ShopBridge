import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

const ConsumerCategory = () => {
  const [currentView, setCurrentView] = useState<string>("electronics");
  const showCat = () => {
    switch (currentView) {
      case "electronics":
        return (
          <ScrollView style={styles.cat_listing}>
            <View style={styles.cat_breakdown_container}>
              <View
                style={{
                  flexDirection: "row",
                  height: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#e6e1e1"
                }}
              >
                <Text style={{ width: "77%" }}>Mobile Phones</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={styles.image}
                    source={require("../../resources/dumb_phone.png")}
                  />
                  <Text style={styles.cat_text}>Cell Phones</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "100%", height: "60%" }}
                    source={require("../../resources/smartphone.png")}
                  />
                  <Text style={styles.cat_text}>SmartPhones</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cat_breakdown_container}>
              <View
                style={{
                  flexDirection: "row",
                  height: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#e6e1e1"
                }}
              >
                <Text style={{ width: "77%" }}>Computers</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width: 85,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"60%"}}
                    source={require("../../resources/laptop.png")}
                  />
                  <Text style={styles.cat_text}>Laptops</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:85,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "100%", height: "60%" }}
                    source={require("../../resources/desktop.png")}
                  />
                  <Text style={styles.cat_text}>Desktop</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cat_breakdown_container}>
              <View
                style={{
                  flexDirection: "row",
                  height: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#e6e1e1"
                }}
              >
                <Text style={{ width: "77%" }}>Tablets & Ipads</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width: 85,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"60%"}}
                    source={require("../../resources/tablet.png")}
                  />
                  <Text style={styles.cat_text}>Laptops</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:85,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "100%", height: "60%" }}
                    source={require("../../resources/ipad.png")}
                  />
                  <Text style={styles.cat_text}>Ipads</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cat_breakdown_container}>
              <View
                style={{
                  flexDirection: "row",
                  height: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#e6e1e1"
                }}
              >
                <Text style={{ width: "77%" }}>Accessories</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width: 85,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"60%"}}
                    source={require("../../resources/computer_acc.png")}
                  />
                  <Text style={styles.cat_text}>Computer Accessories</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width: 85,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"60%"}}
                    source={require("../../resources/phone_acc.png")}
                  />
                  <Text style={styles.cat_text}>Phone Accessories</Text>
                </TouchableOpacity>                
              </View>
            </View>
          </ScrollView>
        );

      case "fashion":
        return (
          <View style={styles.cat_listing}>
            <Text>fashion</Text>
          </View>
        );

      case "h&K":
        return (
          <View style={styles.cat_listing}>
            <Text>H&K</Text>
          </View>
        );

      case "Beauty":
        return (
          <View style={styles.cat_listing}>
            <Text>Beauty</Text>
          </View>
        );

      case "sports":
        return (
          <View style={styles.cat_listing}>
            <Text>Sports</Text>
          </View>
        );

      case "toys":
        return (
          <View style={styles.cat_listing}>
            <Text>Toys</Text>
          </View>
        );

      case "books":
        return (
          <View style={styles.cat_listing}>
            <Text>Books</Text>
          </View>
        );

      case "groceries":
        return (
          <View style={styles.cat_listing}>
            <Text>Groceries</Text>
          </View>
        );

      case "health":
        return (
          <View style={styles.cat_listing}>
            <Text>Health</Text>
          </View>
        );

      case "automotive":
        return (
          <View style={styles.cat_listing}>
            <Text>Automotive</Text>
          </View>
        );

      case "pet":
        return (
          <View style={styles.cat_listing}>
            <Text>Pet</Text>
          </View>
        );

      case "office":
        return (
          <View style={styles.cat_listing}>
            <Text>Office</Text>
          </View>
        );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_cat_container}>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("electronics")}
        >
          <Text style={styles.cat_button_text}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("fashion")}
        >
          <Text style={styles.cat_button_text}>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("h&K")}
        >
          <Text style={styles.cat_button_text}>Home & Kitchen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("Beauty")}
        >
          <Text style={styles.cat_button_text}>Beauty & Personal Care</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("sports")}
        >
          <Text style={styles.cat_button_text}>Sports & Outdoor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("toys")}
        >
          <Text style={styles.cat_button_text}>Toys & Games</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("books")}
        >
          <Text style={styles.cat_button_text}>Books & Media</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("groceries")}
        >
          <Text style={styles.cat_button_text}>Groceries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("health")}
        >
          <Text style={styles.cat_button_text}>Health & Wellness</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("automotive")}
        >
          <Text style={styles.cat_button_text}>Automotive</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("pet")}
        >
          <Text style={styles.cat_button_text}>Pet Supplies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cat_button}
          onPress={() => setCurrentView("office")}
        >
          <Text style={styles.cat_button_text}>Office Supplies</Text>
        </TouchableOpacity>
      </View>
      <View>{showCat()}</View>
    </SafeAreaView>
  );
};

export default ConsumerCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  cat_button: {
    flex: 1,
  },
  cat_button_text: {
    color: "black",
    fontWeight: "bold",
  },
  main_cat_container: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
  cat_listing: {
    flex: 1,
    width: 250,
    backgroundColor: "#e6e1e1",
  },
  image: {
    width: "50%",
    height: "60%",
  },
  cat_text: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  cat_breakdown_container: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
  },
});
