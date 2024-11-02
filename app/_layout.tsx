import React, { useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import { MyContext } from "./components/consumer/myContext";
import { ProvideContext } from "./components/consumer/myContext";
import { router } from "expo-router";
import retreiveToken from "../storage/retrieveToken";

const MainLayout = () => {
  const [userExist, setUserExist] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkIfAccountExists = async () => {
      const result = await retreiveToken("acc");
      console.log(result);
      if (result) {
        console.log("There is an account");
        const accountJson = JSON.parse(String(result));
        setUser(accountJson);
        if (accountJson.type === "c") {
          setUserExist("consumer");
          console.log(userExist);
        } else {
          setUserExist("seller");
          console.log(userExist);
        }
      } else {
        console.log("there is no account");
        setUserExist("index");
      }
    };
    checkIfAccountExists();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" color="black" />;
  } else {
    if (userExist == "consumer") {
      return (
        <ProvideContext>
          <GestureHandlerRootView>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="consumer" options={{ headerShown: false }} />
            </Stack>
          </GestureHandlerRootView>
        </ProvideContext>
      );
    } else if (userExist === "seller") {
      return (
        <ProvideContext>
          <GestureHandlerRootView>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="seller" options={{ headerShown: false }} />
            </Stack>
          </GestureHandlerRootView>
        </ProvideContext>
      );
    } else {
      return (
        <ProvideContext>
          <GestureHandlerRootView>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="seller" options={{ headerShown: false }} />
              <Stack.Screen name="consumer" options={{ headerShown: false }} />
              <Stack.Screen name="auth" options={{ headerShown: false }} />
            </Stack>
          </GestureHandlerRootView>
        </ProvideContext>
      );
    }
  }
};

export default MainLayout;
