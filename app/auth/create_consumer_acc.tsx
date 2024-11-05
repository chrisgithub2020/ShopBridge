import {
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import SubmitConsumerDetails from "../../api_calls/auth/consumer"
import consmerUserData  from "../../api_calls/dataSkeletons"
import DataSkeletons from "../../api_calls/dataSkeletons";
let firstName = "";
let lastName = "";
let email = "";
let password = "";
let phoneNumber = "";
let address = "";
let verify_pass = false;

const CreateConsumer = () => {
  const [focus, setFocusedInput] = useState("0");

  const handleTextChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
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
    }

  };

  DataSkeletons.consumerUserData.firstName = firstName;
  DataSkeletons.consumerUserData.lastName = lastName;
  DataSkeletons.consumerUserData.email = email;
  DataSkeletons.consumerUserData.phoneNumber = phoneNumber;
  DataSkeletons.consumerUserData.address = address;
  DataSkeletons.consumerUserData.password = password;

  
  const submitDetails = async () => {
    if (
      DataSkeletons.consumerUserData.address === "" ||
      DataSkeletons.consumerUserData.email === "" ||
      DataSkeletons.consumerUserData.phoneNumber === "" ||
      DataSkeletons.consumerUserData.firstName === "" ||
      DataSkeletons.consumerUserData.lastName === "" ||
      DataSkeletons.consumerUserData.password === ""
    ) {
      ToastAndroid.show("Every field is required", ToastAndroid.SHORT);
    } else {
      if (verify_pass) {
        const resp = await SubmitConsumerDetails(DataSkeletons.consumerUserData);

        if (resp === true) {
          router.push("/consumer");
        }
      } else {
        ToastAndroid.show("Password does not match", ToastAndroid.SHORT);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../resources/icon.png")}
      />
      <ScrollView style={styles.form_container}>
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
        <TextInput
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
        <TouchableOpacity style={styles.button} onPress={submitDetails}>
          <Text style={styles.button_text}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateConsumer;

const styles = StyleSheet.create({
  image: { height: "30%", width: "100%", marginTop: 20 },
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
});
