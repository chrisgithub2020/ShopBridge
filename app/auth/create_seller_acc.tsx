import {
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import SubmitSellerDetails from "../../api_calls/auth/seller";
import DataSkeletons  from "@/api_calls/dataSkeletons";
import { MyContext } from "../../context/myContext";
let firstName: string = "";
let lastName: string = "";
let email: string = "";
let password: string = "";
let phoneNumber: string = "";
let address: string = "";
let photo: string = "p" ;
let storeName: string = "";
let verify_pass: boolean = false;




const CreateSeller = ({navigation}: {navigation: any}) => {
  const [submit, setSubmit] = useState<boolean>(false)
  const handleTextChange = (text: string) => {
    if (focus === "1") {
      firstName = text;
    } else if (focus === "2") {
      lastName = text;
    } else if (focus === "3") {
      email = text;
    } else if (focus === "4") {
      phoneNumber = text
    } else if (focus === "5") {
      address = text;
    } else if (focus === "6") {
      password = text;
    } else if (focus === "7") {
      if (password === text) {
        verify_pass = true;
      } else {
        verify_pass = false;
      }
    } else if (focus === "8") {
      storeName = text;
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
      DataSkeletons.sellerUserData.store_photo = image_obj.assets[0].base64?.toString()!
      setImage(image_obj.assets[0].base64?.toString());
    } else {
      setImage("");
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
    setSubmit(true)
    if ( DataSkeletons.sellerUserData.firstName === "" ||  DataSkeletons.sellerUserData.lastName === "" ||  DataSkeletons.sellerUserData.email === "" ||  DataSkeletons.sellerUserData.phoneNumber === "" ||  DataSkeletons.sellerUserData.address === "" ||  DataSkeletons.sellerUserData.password === "" ||  DataSkeletons.sellerUserData.store_photo.length === 0 ||  DataSkeletons.sellerUserData.store_name === ""){
      ToastAndroid.show("Every field is required", ToastAndroid.SHORT)
    } else {
      const resp = await SubmitSellerDetails(DataSkeletons.sellerUserData);
      if (resp == "!issue") {
        ToastAndroid.show("Check your internet connections", ToastAndroid.SHORT)
        return
      }
      if (resp) {        
        navigation.replace("index")
      } else {
        ToastAndroid.show("enter the right details", ToastAndroid.SHORT)
      }
    }
    setSubmit(false)
  }

  const [focus, setFocusedInput] = useState("0");
  return (
    <SafeAreaView style={styles.container}>
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

      <ScrollView contentContainerStyle={styles.form_container} showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Store Name:</Text>
          <TextInput
            onChangeText={handleTextChange}
            onFocus={() => setFocusedInput("8")}
            onBlur={() => setFocusedInput("0")}
            style={[styles.input, focus === "8" && styles.inputFocus]}
            placeholderTextColor={"white"}
            placeholder="Store Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>First Name:</Text>
          <TextInput
            onChangeText={handleTextChange}
            onFocus={() => setFocusedInput("1")}
            onBlur={() => setFocusedInput("0")}
            style={[styles.input, focus === "1" && styles.inputFocus]}
            placeholderTextColor={"white"}
            placeholder="First Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Last Name:</Text>
          <TextInput
            onChangeText={handleTextChange}
            onFocus={() => setFocusedInput("2")}
            onBlur={() => setFocusedInput("0")}
            style={[styles.input, focus === "2" && styles.inputFocus]}
            placeholderTextColor={"white"}
            placeholder="Last Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email:</Text>
          <TextInput
            onChangeText={handleTextChange}
            onFocus={() => setFocusedInput("3")}
            onBlur={() => setFocusedInput("0")}
            style={[styles.input, focus === "3" && styles.inputFocus]}
            placeholderTextColor={"white"}
            placeholder="example@gmail.com"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Phone:</Text>
          <TextInput keyboardType="numeric"
            onChangeText={handleTextChange}
            onFocus={() => setFocusedInput("4")}
            onBlur={() => setFocusedInput("0")}
            style={[styles.input, focus === "4" && styles.inputFocus]}
            placeholderTextColor={"white"}
            placeholder="054XXXXXXX"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Address:</Text>
          <TextInput
            onChangeText={handleTextChange}
            onFocus={() => setFocusedInput("5")}
            onBlur={() => setFocusedInput("0")}
            style={[styles.input, focus === "5" && styles.inputFocus]}
            placeholderTextColor={"white"}
            placeholder="Address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Password:</Text>
          <TextInput secureTextEntry={true}
            onChangeText={handleTextChange}
            onFocus={() => setFocusedInput("6")}
            onBlur={() => setFocusedInput("0")}
            style={[styles.input, focus === "6" && styles.inputFocus]}
            placeholderTextColor={"white"}
            placeholder="Password"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Confirm Password:</Text>
          <TextInput secureTextEntry={true}
            onChangeText={handleTextChange}
            onFocus={() => setFocusedInput("7")}
            onBlur={() => setFocusedInput("0")}
            style={[styles.input, focus === "7" && styles.inputFocus]}
            placeholderTextColor={"white"}
            placeholder="Re-type password"
          />
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity disabled={submit}
          style={styles.button}
          onPress={handleSubmit}
        >
          {submit ? <ActivityIndicator style={{ flex: 1 }} size="small" color="black" />:<Text style={styles.button_text}>Submit</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateSeller;

const styles = StyleSheet.create({
  image: { height: 250, width: 250, marginTop: 20, borderRadius: 125 },
  image_container: {
    height: 250,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    alignSelf: "center"
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
    justifyContent: "space-evenly",
  },
  inputContainer: {
    padding: 4,
  },
  inputFocus: {
    borderColor: "#2196f3",
  },
  input: {
    height: 45,
    borderWidth: 3,
    borderRadius: 10,
    paddingLeft: 15,
    borderColor: "#343645",
    color: "white",
  },
  button: {
    height: 40,
    backgroundColor: "#2196f3",
    borderRadius: 5,
    justifyContent: "center",
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
