import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid, View, ActivityIndicator } from "react-native";
import CheckBox from "react-native-check-box"
import DataSkeletons from "../../api_calls/dataSkeletons";
import SubmitSignINDetails from "../../api_calls/auth/sign_in"
import { MyContext } from "../../context/myContext";


const SignIn = ({ navigation }: { navigation: any }) => {
  const [focus, setFocusedInput] = useState("0");
  const {value, setState} = useContext(MyContext)
  const [sellerCheck, setSellerCheck] = useState<boolean>(false)
  const [consumerCheck, setConsumerCheck] = useState<boolean>(true)
  const [submit, setSubmit] = useState<boolean>(false)

  const setDetails = (text: string) => {
    if (focus === "1") {
        DataSkeletons.signIN.identifier = text
    } else if (focus === "2") {
        DataSkeletons.signIN.password = text
    }

    console.log(DataSkeletons.signIN)
  }

  const sendSignInDetails = async () => {
    setSubmit(true)
    if (DataSkeletons.signIN.identifier != "" && DataSkeletons.signIN.password != "") {
      if (sellerCheck == true){
        DataSkeletons.signIN.acc_type = "seller"
      } else {
        DataSkeletons.signIN.acc_type = "consumer"
      }
        const resp = await SubmitSignINDetails(DataSkeletons.signIN)
        if (resp == "!issue") {
          ToastAndroid.show("An issue was encountered", ToastAndroid.SHORT)
          return
        }
        if (resp["success"] == true) {
          if (resp["type"] === "c") {
            navigation.replace("consumer")
          } else {
            navigation.replace("seller")
          }
          setState(resp)
        } else {
          ToastAndroid.show("User does not exist. Make sure detail are correct.", ToastAndroid.SHORT)
        }
    } else {
        ToastAndroid.show("Every Field is required", ToastAndroid.SHORT)
    }
    setSubmit(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: "40%", width: "auto"}}>
        <Image
          style={styles.image}
          source={require("../../resources/icon.png")}
        />
      </View>
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
      <View style={{padding: 5, justifyContent: "center", marginBottom: 3}}>
        <Text style={{color: "white", fontWeight: "bold", margin: 5}}>Who are you?</Text>
        <CheckBox checkBoxColor="white" rightTextStyle={styles.checkBoxText} isChecked={sellerCheck} rightText="Seller" onClick={()=>{
          setConsumerCheck(!consumerCheck)
          setSellerCheck(!sellerCheck)
        }}/>
        <CheckBox checkBoxColor="white" rightTextStyle={styles.checkBoxText} isChecked={consumerCheck} rightText="Consumer" onClick={()=>{
          setSellerCheck(!sellerCheck)
          setConsumerCheck(!consumerCheck)
        }}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={sendSignInDetails}>
        {submit? <ActivityIndicator style={{ flex: 1 }} size="small" color="black" />:<Text style={{alignSelf: "center"}}>Sign In</Text>}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23263a",
    padding: 10,
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
    color: "white",
  },
  image: { height: "100%", width: "100%", marginTop: 20, resizeMode: "contain" },
  button: {
    backgroundColor: "#2196f3",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
  },
  checkBoxText: {
    color: "white"
  }
});
