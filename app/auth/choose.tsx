import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";



const Index = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, flexDirection: "column"}}>

        <View style={styles.buttons_container}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("create_consumer_acc")
            }}
          >
            <Ionicons name="cart" size={90} style={styles.button_text} />
            <Text style={styles.button_text}>Consumer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("create_seller_acc")
            }}
          >
            <MaterialIcons name="store" size={90} style={styles.button_text} />
            <Text style={styles.button_text}>Seller</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", justifyContent:"center"}}>
          <Text style={{color:"white", fontWeight: "bold"}}>Already have an account?  </Text>
          <TouchableOpacity style={styles.signIn} onPress={()=> {
            navigation.navigate("sign_in")
          }}>
            <Text style={{color: "#2196f3", fontWeight: "bold"}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  buttons_container: {
    height: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#23263a",
  },
  signIn: {
    
  },
  button: {
    width: "auto",
    height: "auto",
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#2196f3",
    borderRadius: 10,
  },
  button_text: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
  },
});
