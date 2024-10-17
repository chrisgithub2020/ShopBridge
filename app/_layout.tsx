import React, {Suspense} from 'react'
import { Stack } from 'expo-router'

const MainLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name='auth'  options={{headerShown:false}}/>
        <Stack.Screen name='consumer'  options={{headerShown:false}}/>
    </Stack>
  )
}

export default MainLayout