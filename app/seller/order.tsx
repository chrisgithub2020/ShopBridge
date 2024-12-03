import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useContext, useEffect, useState} from 'react'
import { MyContext } from '../../context/myContext'
import getStoreOrders from "../../api_calls/seller/getStoreOrders"
import { useFocusEffect } from 'expo-router'

interface Order {
  id: string;
  recipient: string;
  contacts: string;
  quantity: string;
  address: string;
  product: string;
  amount: string;
}

interface OrderProp {
  order: Order
  // storeProducts: StoreProduct[]
}

const Orders: Order[] = [
]


interface StoreProduct {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

interface StoreProductProp {
  product: StoreProduct
}


const ProductComponent: React.FC<StoreProduct> = ({ name, quantity,price }) => {
  return (
    <View style={styles.supplies_container}>
          <View style={{flexDirection:"row"}}>
            <View>
              <Image style={styles.image} source={require('../../resources/file.png')}/>
            </View>
            <View style={styles.abt_container}>
              <Text style={{height:"40%", marginTop:10,}}>{name}</Text>
              <Text style={{height:"17%"}}>{price}</Text>
              <Text style={{height:"17%"}}>{quantity}</Text>
            </View>
          </View>          
        </View>
  )
}

const OrderComponent: React.FC<OrderProp> = ({order}) => {
  // const orderProduct = storeProducts.filter(items => items.id === order.product)[0]
  return (
    <View style={styles.order_container}>
        <View>
          <View>
            <Text>Order: {order.id}</Text>
            {/* <ProductComponent price={orderProduct.price} quantity='4' name={orderProduct.name} id={order.product}/> */}
          </View>
          <Text style={styles.details_text}>Recipient: {order.recipient}</Text>
          <Text style={styles.details_text}>Contact: {order.contacts}</Text>
          <Text style={styles.details_text}>Address: {order.address}</Text>
          <Text style={styles.details_text}>Quantity: {order.quantity}</Text>
          <Text style={styles.details_text}>Amount: {order.amount}</Text>     
        </View>
      </View>
  )
}
const Order = ({navigation}: {navigation: any}) => {
  const {value, setState} = useContext(MyContext)
  const [storeOrders, setStoreOrders] = useState<any>();

  const getStoreOrd = async () => {
    let result = await getStoreOrders(value.id)
    console.log(result)
    result.forEach((element: any) => {
      let _i = {"id":element[0],"product":element[3], "recipient":(element[1]+element[2]), "contacts":element[4], "address":element[5], "amount":element[6], "quantity":"2", }      
      if (!Orders.includes(_i)){
        Orders.push(_i)
      }
      setStoreOrders(Orders)
      
    });

  }


  useFocusEffect(React.useCallback(()=>{
    getStoreOrd()
  },[]))


  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={Orders}
        extraData={storeOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderComponent order={item} />}
      />      
    </SafeAreaView>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e1e1",
    flex:1,
    padding: 10,
  },
  order_container: {
    backgroundColor: "white",
    padding: 7,
    borderRadius: 5,
    marginBottom:8,
  },
  supplies_container: {
    backgroundColor: "#e6e1e1",
    borderRadius: 5,
    padding:7,
    height:155,
    marginTop:6,
  },

  image: {
    height: 150,
    width: 150,
  },
  abt_container: {
    flexDirection: "column",
  },
  details_text: {
    width: "100%",
    height:35,
    paddingTop:10,
  },
})