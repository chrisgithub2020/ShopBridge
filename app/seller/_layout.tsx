import React from 'react';
import {Tabs} from "expo-router";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


const SellerTabLayout = () => {                                 
  return (
    <Tabs>        
        <Tabs.Screen name="store" options={{
            title: "Inventory",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="archive" color={color}/>,
        }}/>
        <Tabs.Screen name="order" options={{
            title: "Orders",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="tasks" color={color}/>,
        }}/>
        <Tabs.Screen name="setting" options={{
            title: "Setting",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="cog" color={color}/>,
        }}/>
    </Tabs>
  )
}

export default SellerTabLayout