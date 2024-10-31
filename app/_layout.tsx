import React, {Suspense} from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Stack } from 'expo-router'

const MainLayout = () => {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name='index' options={{headerShown:false}}/>
          <Stack.Screen name='auth'  options={{headerShown:false}}/>
          <Stack.Screen name='consumer'  options={{headerShown:false}}/>
          <Stack.Screen name='seller'  options={{headerShown:false}}/>
      </Stack>
    </GestureHandlerRootView>
  )
}

export default MainLayout