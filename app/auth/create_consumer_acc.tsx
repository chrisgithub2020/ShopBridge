import {Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';

const create_consumer_acc = () => {
    const [focus, setFocusedInput] = useState("0");
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../../resources/icon.png")} />  
      <ScrollView style={styles.form_container}>
        <Text style={styles.text}>First Name:</Text>
        <TextInput onFocus={() => setFocusedInput("1")} onBlur={() => setFocusedInput("0")} style={[styles.input, focus === "1" && styles.inputFocus]} placeholderTextColor={"white"} placeholder="First Name"/>
        <Text style={styles.text}>Last Name:</Text>
        <TextInput onFocus={() => setFocusedInput("2")} onBlur={() => setFocusedInput("0")} style={[styles.input, focus === "2" && styles.inputFocus]} placeholderTextColor={"white"} placeholder="Last Name"/>
        <Text style={styles.text}>Email:</Text>
        <TextInput onFocus={() => setFocusedInput("3")} onBlur={() => setFocusedInput("0")} style={[styles.input, focus === "3" && styles.inputFocus]} placeholderTextColor={"white"} placeholder="example@gmail.com"/>
        <Text style={styles.text}>Phone:</Text>
        <TextInput onFocus={() => setFocusedInput("4")} onBlur={() => setFocusedInput("0")} style={[styles.input, focus === "4" && styles.inputFocus]} placeholderTextColor={"white"} placeholder="054XXXXXXX"/>
        <Text style={styles.text}>Address:</Text>
        <TextInput onFocus={() => setFocusedInput("5")} onBlur={() => setFocusedInput("0")} style={[styles.input, focus === "5" && styles.inputFocus]} placeholderTextColor={"white"} placeholder="Address"/>
        <Text style={styles.text}>Password:</Text>
        <TextInput onFocus={() => setFocusedInput("6")} onBlur={() => setFocusedInput("0")} style={[styles.input, focus === "6" && styles.inputFocus]} placeholderTextColor={"white"} placeholder="Password"/>
        <Text style={styles.text}>Confirm Password:</Text>
        <TextInput onFocus={() => setFocusedInput("7")} onBlur={() => setFocusedInput("0")} style={[styles.input, focus === "7" && styles.inputFocus]} placeholderTextColor={"white"} placeholder="Re-type password"/>
        <TouchableOpacity style={styles.button} onPress={()=>{router.push("../consumer")}}>
            <Text style={styles.button_text}>Submit</Text>
        </TouchableOpacity>
        </ScrollView>      
    </SafeAreaView>
  )
}

export default create_consumer_acc


const styles = StyleSheet.create({
    image: { height: "30%", width: "100%", marginTop: 20 },
    container: {
        flex: 1,
        backgroundColor: "#23263a",
    },
    text:{
        color: "white",
        fontWeight: "bold",
        marginBottom: 10
    },
    form_container: {
        margin:15,
        color: "white",
    },
    inputFocus: {
        borderColor: "#2196f3"
    },
    input: {
        height:50,
        borderWidth: 3,
        borderRadius: 10,
        paddingLeft:15,
        borderColor: "#343645",
        marginBottom: 15,
        marginRight: 20,
        color: "white",
    },
    button: {
        height: 40,
        paddingTop: 10,
        marginTop:10,
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
    }
})