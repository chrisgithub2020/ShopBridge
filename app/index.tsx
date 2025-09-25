import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import retreiveToken from "../storage/retrieveToken"
import { ActivityIndicator } from "react-native";
import { ProvideContext } from "../context/myContext";
import fetchData from "../api_calls/auth/fetchAccountData"


interface valueContent {
  acc: Object;
}


const LoadingScreen = ({navigation}: {navigation: any}) => {
  const [userExist, setUserExist] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const {a_token, r_token, cart} = ProvideContext()


  useEffect(() => {
    const checkIfAccountExists = async () => {
      const access_token = await retreiveToken("a_token");
      const refresh_token = await retreiveToken("r_token");
      const cartString = await retreiveToken("cart")

      if (access_token) {
        const accType = await fetchData(access_token);
        if (accType === null){
          setUserExist("index")
        } 
        if ("refresh" in accType) {
          a_token.current = accType["refresh"]["a_token"]
          r_token.current = accType["refresh"]["r_token"]
        }
        a_token.current = access_token    
        r_token.current = refresh_token ? refresh_token : ""
        
        if (accType["data"] === "consumer") {
          setUserExist("consumer");
          let cartItems = cartString ? cartString.split(",") : []

          cart.current?.push(...cartItems)
          setIsLoading(false)
        } else if (accType["data"] == "seller"){

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
    if (isLoading === false) {
      if (userExist === "consumer"){
        navigation.replace("consumer")
      } else if (userExist === "seller") {
        navigation.replace("seller")
      } else if (userExist === "index") {
        navigation.replace("auth")
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
