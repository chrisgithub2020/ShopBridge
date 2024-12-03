import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MyContext } from "@/context/myContext";



const ConsumerCategory = ({navigation}: {navigation: any}) => {
  const {filter, setFilter} = useContext(MyContext)
  const [currentView, setCurrentView] = useState<string>("e");

  const viewCategory = (subCategory: string[]=[]) => {
    setFilter({mainCat: "", subCat: []})
    setFilter({mainCat: currentView, subCat: subCategory})
    navigation.navigate("index")
  }
  const showCat = () => {
    switch (currentView) {
      case "e":
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
                <TouchableOpacity onPress={()=>{viewCategory(["cp", "sp"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["cp"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["sp"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["l", "d"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["l"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["d"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["t", "i"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={()=>{viewCategory(["t"])}}
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
                  <Text style={styles.cat_text}>Tablets</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{viewCategory(["i"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["ca", "pa", "h&h", "oa"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["ca"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["pa"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["h&h"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["oa"])}}
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

      case "f":
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
                <TouchableOpacity onPress={()=>{viewCategory(["mc", "wc", "kc"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["mc"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["wc"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["kc"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["ms", "ws", "s" , "a"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["ms"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["ws"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["s"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["a"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["f", "b", "ka", "h&d"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["f"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["b"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["ka"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["h&d"])}}
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

      case "b":
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
                <TouchableOpacity onPress={()=>{viewCategory(["hc", "sc"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["hc"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["sc"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["mu", "fg"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["mu"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["fg"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["bc", "mg"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["bc"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["mg"])}}
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

      case "sp":
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
                <TouchableOpacity onPress={()=>{viewCategory(["fe", "sg"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["fe"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["sg"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["og", "sw"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["og"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["sw"])}}
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

      case "t":
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
                <TouchableOpacity onPress={()=>{viewCategory(["af", "et"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["af"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["et"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["bg", "vg"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["bg"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["vg"])}}
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

      case "bk":
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
                <TouchableOpacity onPress={()=>{viewCategory(["bm"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>             
            </View>
          </ScrollView>
        );

      case "g":
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
                <TouchableOpacity onPress={()=>{viewCategory(["fp", "bv", "sk"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["fp"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["bv"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["sk"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["hhs"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["hhs"])}}
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

      case "h":
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
                <TouchableOpacity onPress={()=>{viewCategory(["meds", "fc"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["meds"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["fc"])}}
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

      case "a":
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
                <Text style={{ width: "77%" }}>Automobile</Text>
                <TouchableOpacity onPress={()=>{viewCategory(["ca", "t&e"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["ca"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["t&e"])}}
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

      case "p":
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
                <TouchableOpacity onPress={()=>{viewCategory(["pf", "pt"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["pf"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["pt"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["gs", "phr"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["gs"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["phr"])}}
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

      case "o":
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
                <Text style={{ width: "77%" }}>Office</Text>
                <TouchableOpacity onPress={()=>{viewCategory(["stat", "of"])}}>
                  <Text style={{ color: "#2196f3" }}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{viewCategory(["stat"])}}
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
                <TouchableOpacity onPress={()=>{viewCategory(["of"])}}
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
          style={[styles.cat_button, currentView === "e" && styles.active_cat]}
          onPress={() => setCurrentView("e")}
        >
          <Text style={styles.cat_button_text}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "f" && styles.active_cat]}
          onPress={() => setCurrentView("f")}
        >
          <Text style={styles.cat_button_text}>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "h&K" && styles.active_cat]}
          onPress={() => setCurrentView("h&K")}
        >
          <Text style={styles.cat_button_text}>Home & Kitchen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "b" && styles.active_cat]}
          onPress={() => setCurrentView("b")}
        >
          <Text style={styles.cat_button_text}>Beauty & Personal Care</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "sp" && styles.active_cat]}
          onPress={() => setCurrentView("sp")}
        >
          <Text style={styles.cat_button_text}>Sports & Outdoor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "t" && styles.active_cat]}
          onPress={() => setCurrentView("t")}
        >
          <Text style={styles.cat_button_text}>Toys & Games</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "bk" && styles.active_cat]}
          onPress={() => setCurrentView("bk")}
        >
          <Text style={styles.cat_button_text}>Books & Media</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "g" && styles.active_cat]}
          onPress={() => setCurrentView("g")}
        >
          <Text style={styles.cat_button_text}>Groceries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "h" && styles.active_cat]}
          onPress={() => setCurrentView("h")}
        >
          <Text style={styles.cat_button_text}>Health & Wellness</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "a" && styles.active_cat]}
          onPress={() => setCurrentView("a")}
        >
          <Text style={styles.cat_button_text}>Automotive</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "p" && styles.active_cat]}
          onPress={() => setCurrentView("p")}
        >
          <Text style={styles.cat_button_text}>Pet Supplies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cat_button, currentView === "o" && styles.active_cat]}
          onPress={() => setCurrentView("o")}
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
    paddingTop: 17,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
  main_cat_container: {
    flex: 1,
    paddingLeft: 3,
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
  active_cat:{
    borderLeftWidth:4,
    backgroundColor: "#e6e1e1",
    borderColor: "#2196f3",
  }
});
