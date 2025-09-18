import React, { useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ProvideContext } from "../context/myContext";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellerTabLayout from "./seller/_layout"
import ConsumerTabLayout from "./consumer/_layout"
import AuthLayout from "./auth/_layout"
import LoadingScreen from "./index"
import NoInternet from "./components/noInternetPage";
import NetInfo from "@react-native-community/netinfo"

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true)

  useEffect(()=>{
        NetInfo.addEventListener((state)=>{
            setIsConnected(state.isConnected!)
        })

        return ()=>{
            NetInfo.addEventListener((state)=>{
                setIsConnected(state.isConnected!)
            })
        }
  })
  

  
  return (
    <ProvideContext>
      <GestureHandlerRootView>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" component={isConnected ? LoadingScreen: NoInternet} options={{ headerShown: false }} />
          <Stack.Screen component={isConnected ? SellerTabLayout: NoInternet} name="seller" options={{ headerShown: false }} />
          <Stack.Screen component={isConnected ? ConsumerTabLayout: NoInternet} name="consumer" options={{ headerShown: false }} />
          <Stack.Screen component={AuthLayout} name="auth" options={{ headerShown: false }} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </ProvideContext>
  );
};

export default MainLayout;
