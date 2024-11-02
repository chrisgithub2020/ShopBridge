import {
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  NativeSyntheticEvent,
  ToastAndroid,
  TextInputChangeEventData,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import SubmitSellerDetails from "../../api_calls/auth/seller";
import DataSkeletons  from "@/api_calls/dataSkeletons";
import retreiveToken from "@/storage/retrieveToken";
let firstName = "";
let lastName = "";
let email = "";
let password = "";
let phoneNumber = "";
let address = "";
let photo: String = "p" ;
let storeName = "";
let verify_pass = false;




const create_consumer_acc = () => {
  const handleTextChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (focus === "1") {
      firstName = event.nativeEvent["text"];
    } else if (focus === "2") {
      lastName = event.nativeEvent["text"];
    } else if (focus === "3") {
      email = event.nativeEvent["text"];
    } else if (focus === "4") {
      phoneNumber = event.nativeEvent["text"];
    } else if (focus === "5") {
      address = event.nativeEvent["text"];
    } else if (focus === "6") {
      password = event.nativeEvent["text"];
    } else if (focus === "7") {
      if (password === event.nativeEvent["text"]) {
        verify_pass = true;
      } else {
        verify_pass = false;
      }
    } else if (focus === "8") {
      storeName = event.nativeEvent["text"];
    }

  };
  const [image, setImage] = useState<String>();
  const pickImage = async () => {
    let image_obj = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
      base64: true,
    });

    if (!image_obj.canceled) {
      DataSkeletons.sellerUserData.store_photo.push(image_obj.assets[0].base64?.toString())
      setImage(image_obj.assets[0].base64?.toString());
    } else {
      console.log(image);
      setImage(require("../../resources/realicon.jpg"));
    }
  };

  DataSkeletons.sellerUserData.firstName = firstName;
  DataSkeletons.sellerUserData.lastName = lastName;
  DataSkeletons.sellerUserData.email = email;
  DataSkeletons.sellerUserData.phoneNumber = phoneNumber;
  DataSkeletons.sellerUserData.password = password;
  DataSkeletons.sellerUserData.address = address;
  DataSkeletons.sellerUserData.store_name = storeName


  const handleSubmit = async () => {
    if ( DataSkeletons.sellerUserData.firstName === "" ||  DataSkeletons.sellerUserData.lastName === "" ||  DataSkeletons.sellerUserData.email === "" ||  DataSkeletons.sellerUserData.phoneNumber === "" ||  DataSkeletons.sellerUserData.address === "" ||  DataSkeletons.sellerUserData.password === "" ||  DataSkeletons.sellerUserData.store_photo.length === 0 ||  DataSkeletons.sellerUserData.store_name === ""){
      ToastAndroid.show("Every field is required", ToastAndroid.SHORT)
    } else {
      const resp = await SubmitSellerDetails( DataSkeletons.sellerUserData);

      if (resp === true) {
        router.push("../seller")
      }
    }
  }

  const [focus, setFocusedInput] = useState("0");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.image_container}>
          <Image
            source={
              image ? { uri: "data:image/jpeg;base64,"+image } : require("../../resources/realicon.jpg")
            }
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.select_img_button}
            onPress={pickImage}
          >
            <MaterialIcons
              name="photo"
              size={35}
              style={{
                color: "white",
                justifyContent: "center",
                alignSelf: "center",
              }}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form_container}>
        <Text style={styles.text}>Store Name:</Text>
        <TextInput
          onChange={handleTextChange}
          onFocus={() => setFocusedInput("8")}
          onBlur={() => setFocusedInput("0")}
          style={[styles.input, focus === "8" && styles.inputFocus]}
          placeholderTextColor={"white"}
          placeholder="Store Name"
        />
        <Text style={styles.text}>First Name:</Text>
        <TextInput
          onChange={handleTextChange}
          onFocus={() => setFocusedInput("1")}
          onBlur={() => setFocusedInput("0")}
          style={[styles.input, focus === "1" && styles.inputFocus]}
          placeholderTextColor={"white"}
          placeholder="First Name"
        />
        <Text style={styles.text}>Last Name:</Text>
        <TextInput
          onChange={handleTextChange}
          onFocus={() => setFocusedInput("2")}
          onBlur={() => setFocusedInput("0")}
          style={[styles.input, focus === "2" && styles.inputFocus]}
          placeholderTextColor={"white"}
          placeholder="Last Name"
        />
        <Text style={styles.text}>Email:</Text>
        <TextInput
          onChange={handleTextChange}
          onFocus={() => setFocusedInput("3")}
          onBlur={() => setFocusedInput("0")}
          style={[styles.input, focus === "3" && styles.inputFocus]}
          placeholderTextColor={"white"}
          placeholder="example@gmail.com"
        />
        <Text style={styles.text}>Phone:</Text>
        <TextInput keyboardType="numeric"
          onChange={handleTextChange}
          onFocus={() => setFocusedInput("4")}
          onBlur={() => setFocusedInput("0")}
          style={[styles.input, focus === "4" && styles.inputFocus]}
          placeholderTextColor={"white"}
          placeholder="054XXXXXXX"
        />
        <Text style={styles.text}>Address:</Text>
        <TextInput
          onChange={handleTextChange}
          onFocus={() => setFocusedInput("5")}
          onBlur={() => setFocusedInput("0")}
          style={[styles.input, focus === "5" && styles.inputFocus]}
          placeholderTextColor={"white"}
          placeholder="Address"
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          onChange={handleTextChange}
          onFocus={() => setFocusedInput("6")}
          onBlur={() => setFocusedInput("0")}
          style={[styles.input, focus === "6" && styles.inputFocus]}
          placeholderTextColor={"white"}
          placeholder="Password"
        />
        <Text style={styles.text}>Confirm Password:</Text>
        <TextInput
          onChange={handleTextChange}
          onFocus={() => setFocusedInput("7")}
          onBlur={() => setFocusedInput("0")}
          style={[styles.input, focus === "7" && styles.inputFocus]}
          placeholderTextColor={"white"}
          placeholder="Re-type password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.button_text}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default create_consumer_acc;

const styles = StyleSheet.create({
  image: { height: 250, width: 250, marginTop: 20, borderRadius: 125 },
  image_container: {
    height: 250,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  container: {
    flex: 1,
    backgroundColor: "#23263a",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  form_container: {
    margin: 15,
    color: "white",
  },
  inputFocus: {
    borderColor: "#2196f3",
  },
  input: {
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
    paddingLeft: 15,
    borderColor: "#343645",
    marginBottom: 15,
    marginRight: 20,
    color: "white",
  },
  button: {
    height: 40,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: "#2196f3",
    borderRadius: 5,
  },
  button_text: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  scrollv: {
    color: "white",
  },

  select_img_button: {
    position: "absolute",
    height: 50,
    width: 50,
    bottom: 10,
    right: 10,
    backgroundColor: "#2196f3",
    borderRadius: 25,
    paddingTop: 7,
  },
});
