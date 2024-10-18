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
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
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
                    style={{ width: "100%", height: "60%",backgroundColor: "#e6e1e1", }}
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
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
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
                    style={{width:"100%", height:"60%", backgroundColor: "#e6e1e1",}}
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
                    style={{ width: "100%", height: "60%",backgroundColor: "#e6e1e1", }}
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
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
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
                    style={{width:"100%", height:"60%", backgroundColor: "#e6e1e1",}}
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
                    style={{ width: "100%", height: "60%",backgroundColor: "#e6e1e1", }}
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
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
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
                    style={{width:"100%", height:"60%", backgroundColor: "#e6e1e1",}}
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
                    style={{width:"100%", height:"60%", backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/phone_acc.png")}
                  />
                  <Text style={styles.cat_text}>Phone Accessories</Text>
                </TouchableOpacity>                
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
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
                    style={{width:"100%", height:"60%", backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/h&h.png")}
                  />
                  <Text style={styles.cat_text}>Headphones & Headsets</Text>
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
                    style={{width:"100%", height:"60%", backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/other_acc.png")}
                  />
                  <Text style={styles.cat_text}>Other Accessories</Text>
                </TouchableOpacity>                
              </View>
            </View>
          </ScrollView>
        );

      case "fashion":
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
                <Text style={{ width: "77%" }}>Clothing</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/men_clothing.png")}
                  />
                  <Text style={styles.cat_text}>Men's Clothing</Text>
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
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/women_clothing.png")}
                  />
                  <Text style={styles.cat_text}>Women's Clothing</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%", backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/kid_clothing.png")}
                  />
                  <Text style={styles.cat_text}>Kid's Clothing</Text>
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
                <Text style={{ width: "77%" }}>Shoes & Accessories</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/men_shoe.png")}
                  />
                  <Text style={styles.cat_text}>Men's Shoes</Text>
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
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/women_shoe.png")}
                  />
                  <Text style={styles.cat_text}>Women's Shoes</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"35%",
                    alignItems: "center",
                    margin: 5
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/sneakers.png")}
                  />
                  <Text style={styles.cat_text}>Sneakers</Text>
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
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/cloth_acc.png")}
                  />
                  <Text style={styles.cat_text}>Accessories</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        );

      case "h&K":
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
                <Text style={{ width: "77%" }}>Home & Kitchen</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%", backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/furniture.png")}
                  />
                  <Text style={styles.cat_text}>Furniture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/bedding.png")}
                  />
                  <Text style={styles.cat_text}>Bedding</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/kitchen_app.png")}
                  />
                  <Text style={styles.cat_text}>Kitchen Appliances</Text>
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
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/home_appliances_&_decor.png")}
                  />
                  <Text style={styles.cat_text}>Home and Decor</Text>
                </TouchableOpacity>                
              </View>
            </View>
          </ScrollView>
        );

      case "Beauty":
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
                <Text style={{ width: "77%" }}>Beauty & Care</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/haircare.png")}
                  />
                  <Text style={styles.cat_text}>Haircare</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/skincare.png")}
                  />
                  <Text style={styles.cat_text}>Skincare</Text>
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
                <Text style={{ width: "77%" }}>Beauty & Scents</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/makeup.png")}
                  />
                  <Text style={styles.cat_text}>MakeUp</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/perfume.png")}
                  />
                  <Text style={styles.cat_text}>Fragrance</Text>
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
                <Text style={{ width: "77%" }}>Grooming & Wellness</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/body_care.png")}
                  />
                  <Text style={styles.cat_text}>Body Care</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/men_grooming.png")}
                  />
                  <Text style={styles.cat_text}>Men's Grooming</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        );

      case "sports":
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
                <Text style={{ width: "77%" }}>Fitness & Sports</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%", backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/fitness.png")}
                  />
                  <Text style={styles.cat_text}>Fitness Equipments</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/sport_gear.png")}
                  />
                  <Text style={styles.cat_text}>Sport Gears</Text>
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
                <Text style={{ width: "77%" }}>Outdoor and Wears</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/outdoor_gear.png")}
                  />
                  <Text style={styles.cat_text}>Outdoor Gears</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/sport_wear.png")}
                  />
                  <Text style={styles.cat_text}>Sport Wears</Text>
                </TouchableOpacity>
              </View>              
            </View>
          </ScrollView>
        );

      case "toys":
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
                <Text style={{ width: "77%" }}>Toys</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/action_figures.png")}
                  />
                  <Text style={styles.cat_text}>Figures</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/edu_toys.png")}
                  />
                  <Text style={styles.cat_text}>Educational Toys</Text>
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
                <Text style={{ width: "77%" }}>Games</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/board_games.png")}
                  />
                  <Text style={styles.cat_text}>Board Games</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/vid_games.png")}
                  />
                  <Text style={styles.cat_text}>Video Games</Text>
                </TouchableOpacity>
              </View>              
            </View>            
          </ScrollView>
        );

      case "books":
        return (
          <ScrollView style={styles.cat_listing}>
            <View style={styles.cat_breakdown_container}>
              <View
                style={{
                  flexDirection: "row",
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#e6e1e1"
                }}
              >
                <Text style={{ width: "77%", fontWeight: "bold" }}>Best Selling Books</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>             
            </View>
          </ScrollView>
        );

      case "groceries":
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
                <Text style={{ width: "77%" }}>Groceries & Refreshments</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/fresh_produce.png")}
                  />
                  <Text style={styles.cat_text}>Fresh Produce</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%", backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/beverages.png")}
                  />
                  <Text style={styles.cat_text}>Beverages</Text>
                </TouchableOpacity>
              </View>  
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/snack.png")}
                  />
                  <Text style={styles.cat_text}>Snacks</Text>
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
                <Text style={{ width: "77%" }}>Household Essentials</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/hh_supplies.png")}
                  />
                  <Text style={styles.cat_text}>Household Supplies</Text>
                </TouchableOpacity>                
              </View>             
            </View>
          </ScrollView>
        );

      case "health":
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
                <Text style={{ width: "77%" }}>Health Care</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/med_sup.png")}
                  />
                  <Text style={styles.cat_text}>Medical Supplies</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/fem_care.png")}
                  />
                  <Text style={styles.cat_text}>Femenine Care</Text>
                </TouchableOpacity>
              </View>          
            </View>
          </ScrollView>
        );

      case "automotive":
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
                <Text style={{ width: "77%" }}>Health Care</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"55%", marginTop:12, backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/car_acc.png")}
                  />
                  <Text style={styles.cat_text}>Car Accessories</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "55%", marginTop:12, backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/tool.png")}
                  />
                  <Text style={styles.cat_text}>Tools and Equipments</Text>
                </TouchableOpacity>
              </View>          
            </View>
          </ScrollView>
        );

      case "pet":
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
                <Text style={{ width: "77%" }}>Pet Essentials</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/pet_food.png")}
                  />
                  <Text style={styles.cat_text}>Pet Food</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/pet_toy.png")}
                  />
                  <Text style={styles.cat_text}>Pet Toy</Text>
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
                <Text style={{ width: "77%" }}>Grooming & Habitat</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"70%",backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/pet_groom.png")}
                  />
                  <Text style={styles.cat_text}>Grooming supplies</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "70%",backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/pet_hab.png")}
                  />
                  <Text style={styles.cat_text}>Pet habitat & Restraints</Text>
                </TouchableOpacity>
              </View>          
            </View>
          </ScrollView>
        );

      case "office":
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
                <Text style={{ width: "77%" }}>Health Care</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{width:"100%", height:"55%", marginTop:12, backgroundColor: "#e6e1e1",}}
                    source={require("../../resources/stationery.png")}
                  />
                  <Text style={styles.cat_text}>Stationery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    height: 150,
                    width:"40%",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "55%", marginTop:12,backgroundColor: "#e6e1e1", }}
                    source={require("../../resources/office_furniture.png")}
                  />
                  <Text style={styles.cat_text}>Office Furniture</Text>
                </TouchableOpacity>
              </View>          
            </View>
          </ScrollView>
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
    width: "100%",
    height: "60%",
    backgroundColor: "#e6e1e1",
  },
  cat_text: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    width: "100%",
  },
  cat_breakdown_container: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
  },
});
