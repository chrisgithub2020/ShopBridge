import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import retreiveToken from "../storage/retrieveToken"
import { ActivityIndicator } from "react-native";
import { MyContext } from "./components/consumer/myContext";


interface valueContent {
  acc: Object;
}


const LoadingScreen = ({navigation}: {navigation: any}) => {
  const [userExist, setUserExist] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const {value, setState} = useContext(MyContext)

  useEffect(() => {
    const checkIfAccountExists = async () => {
      const result = await retreiveToken("acc");
      if (result) {
        const accountJson = JSON.parse(String(result)); 
        setState(accountJson)
        
        if (accountJson.type === "c") {

          setUserExist("consumer");
          setIsLoading(false)
        } else {

          setUserExist("seller");
          setIsLoading(false)
        }

        
      } else {
        
        setUserExist("index");
        setIsLoading(false)
      }
    };
    checkIfAccountExists();
  }, []);

  useEffect(()=>{
    console.log(value)
  },[value])

  useEffect(()=>{
    if (isLoading === false) {
      if (userExist === "consumer"){
        navigation.navigate("consumer")
      } else if (userExist === "seller") {
        navigation.navigate("seller")
      } else if (userExist === "index") {
        navigation.navigate("auth")
      }
    }
  },[isLoading, userExist])

  

  return <ActivityIndicator style={{ flex: 1 }} size="large" color="black" />;
};

export default LoadingScreen;

const styles = StyleSheet.create({
  image: { height: "50%", width: "100%", marginTop: 20 },
  text_rhetorical: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
  text_support: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    lineHeight: 24,
    padding: 15,
    borderRadius: 8,
    fontFamily: "System",
  },
  paragraph: { padding: 10 },
  text_sign: { justifyContent: "center", alignSelf: "center", color: "white" },
  button: {
    paddingTop: 10,
    backgroundColor: "#2196f3",
    height: 40,
    marginTop: 10,
    borderRadius:5,
  },
  container: { backgroundColor: "#23263a", flex: 1 },
});
