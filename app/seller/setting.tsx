import { View, Text, BackHandler} from 'react-native'
import React from 'react'

BackHandler.addEventListener("hardwareBackPress", ()=>{
  BackHandler.exitApp()
  return true
})

const Setting = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>setting</Text>
    </View>
  )
}

export default Setting