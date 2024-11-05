import React from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from './order';
import Setting from './setting';
import Store from './store';

const Tabs = createBottomTabNavigator()


const SellerTabLayout = () => {                                 
  return (
    <Tabs.Navigator>        
        <Tabs.Screen component={Store} name="Store" options={{
            title: "Inventory",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="archive" color={color}/>,
        }}/>
        <Tabs.Screen component={Order} name="Order" options={{
            title: "Orders",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="tasks" color={color}/>,
        }}/>
        <Tabs.Screen component={Setting} name="Setting" options={{
            title: "Setting",
            headerShown:false,
            tabBarIcon: ({color}) => <FontAwesome size={20} name="cog" color={color}/>,
        }}/>
    </Tabs.Navigator>
  )
}

export default SellerTabLayout