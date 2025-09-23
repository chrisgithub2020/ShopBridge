import { View, Text } from 'react-native'
import React, {Suspense} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './choose';
import About from "./index"
import CreateConsumer from './create_consumer_acc';
import CreateSeller from './create_seller_acc';
import SignIn from './sign_in';



const Stack = createNativeStackNavigator()


const AuthLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={About} name="about" options={{headerShown: false}}/>
      <Stack.Screen component={Index} name="choose" options={{headerShown: false}}/>
      <Stack.Screen component={CreateConsumer} name="create_consumer_acc" options={{headerShown: false}}/>
      <Stack.Screen component={CreateSeller} name="create_seller_acc" options={{headerShown: false}}/>
      <Stack.Screen component={SignIn} name="sign_in" options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AuthLayout