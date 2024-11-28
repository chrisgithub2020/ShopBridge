import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import DataSkeletons from "../../api_calls/dataSkeletons";
import SubmitSignINDetails from "../../api_calls/auth/sign_in"
import { MyContext } from "../../context/myContext";


const SignIn = ({ navigation }: { navigation: any }) => {
  const [focus, setFocusedInput] = useState("0");
  const {value, setState} = useContext(MyContext)

  const setDetails = (text: string) => {
    if (focus === "1") {
        DataSkeletons.signIN.identifier = text
    } else if (focus === "2") {
        DataSkeletons.signIN.password = text
    }

    console.log(DataSkeletons.signIN)
  }

  const sendSignInDetails = async () => {
    if (DataSkeletons.signIN.identifier != "" && DataSkeletons.signIN.password != "") {
        const resp = await SubmitSignINDetails(DataSkeletons.signIN)
        if (resp["type"] === "c") {
          navigation.navigate("consumer")
        } else {
          navigation.navigate("seller")
        }
        setState(resp)
        // DataSkeletons.signIN.identifier = ""
        // DataSkeletons.signIN.password = ""
    } else {
        ToastAndroid.show("Every Field is required", ToastAndroid.SHORT)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../resources/icon.png")}
      />
      <Text style={{color: "white", fontWeight: "bold", margin: 5}}>Phone or Email: </Text>
      <TextInput onChangeText={setDetails}
        onFocus={() => setFocusedInput("1")}
        onBlur={() => setFocusedInput("0")}
        placeholder="059xxxxxxx or example@gmail.com"
        placeholderTextColor={"white"}
        style={[styles.input, focus === "1" && styles.inputFocus]}
      />
      <Text style={{color: "white", fontWeight: "bold", margin: 5}}>Password</Text>
      <TextInput onChangeText={setDetails}
        onFocus={() => setFocusedInput("2")}
        onBlur={() => setFocusedInput("0")}
        placeholder="password"
        placeholderTextColor={"white"}
        style={[styles.input, focus === "2" && styles.inputFocus]}
      />

      <TouchableOpacity style={styles.button} onPress={sendSignInDetails}>
        <Text style={{alignSelf: "center"}}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23263a",
    padding: 7,
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
  image: { height: "30%", width: "100%", marginTop: 20 },
  button: {
    backgroundColor: "#2196f3",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  }
});
