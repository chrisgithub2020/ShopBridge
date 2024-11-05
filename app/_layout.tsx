import React, { useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ProvideContext } from "./components/consumer/myContext";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellerTabLayout from "./seller/_layout"
import ConsumerTabLayout from "./consumer/_layout"
import AuthLayout from "./auth/_layout"
import LoadingScreen from "./index"

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  

  
  return (
    <ProvideContext>
      <GestureHandlerRootView>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" component={LoadingScreen} options={{ headerShown: false }} />
          <Stack.Screen component={SellerTabLayout} name="seller" options={{ headerShown: false }} />
          <Stack.Screen component={ConsumerTabLayout} name="consumer" options={{ headerShown: false }} />
          <Stack.Screen component={AuthLayout} name="auth" options={{ headerShown: false }} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </ProvideContext>
  );
};

export default MainLayout;
