import { View, Text } from 'react-native'
import React, {Suspense} from 'react'
import { Stack } from 'expo-router'
const create_consumer = React.lazy(() => import("./create_consumer_acc"))
const create_seller = React.lazy(() => import("./create_consumer_acc"))


const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="create_consumer_acc" options={{headerShown: false}}/>
      <Stack.Screen name="create_seller_acc" options={{headerShown: false}}/>

    </Stack>
  )
}

export default _layout