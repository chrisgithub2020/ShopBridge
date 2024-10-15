import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router"
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { FontAwesome } from '@expo/vector-icons'

const ConsumerTabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{
            title: "Home",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="home" color={color}/>,
        }}/>
        <Tabs.Screen name="category" options={{
            title: "Category",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="th-list" color={color}/>,
        }}/>
        <Tabs.Screen name="settings" options={{
            title: "Settings",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="cog" color={color}/>,
        }}/>
    </Tabs>
  )
}

export default ConsumerTabLayout