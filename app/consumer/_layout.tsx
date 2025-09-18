import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import Cart from './cart';
import ConsumerCategory from './category';
import ConsumerHome from './index';
import ConsumerSettings from './settings';
import NetInfo from "@react-native-community/netinfo"

const Tabs = createBottomTabNavigator()

const ConsumerTabLayout = () => {
  return (
    <Tabs.Navigator>
        <Tabs.Screen component={ConsumerHome} name="index" options={{
            title: "Home",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="home" color={color}/>,
        }}/>
        <Tabs.Screen component={ConsumerCategory} name="category" options={{
            title: "Category",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="th-list" color={color}/>,
        }}/>
        <Tabs.Screen component={ConsumerSettings} name="settings" options={{
            title: "Settings",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="cog" color={color}/>,
        }}/>
        <Tabs.Screen component={Cart} name="cart" options={{
            title: "Cart",
            headerShown:false,
            tabBarIcon: ({color}) => <MaterialIcons size={20} name="shopping-cart" color={color}/>,
        }}/>
    </Tabs.Navigator>
  )
}

export default ConsumerTabLayout