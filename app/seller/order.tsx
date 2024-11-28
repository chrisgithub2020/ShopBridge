import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useContext, useEffect, useState} from 'react'
import { MyContext } from '../../context/myContext'
import getStoreOrders from "../../api_calls/seller/getStoreOrders"

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


const ProductComponent: React.FC<StoreProduct> = ({ id,name, quantity,price }) => {
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
  return (
    <View style={styles.order_container}>
        <View>
          <View>
            <Text>Order: </Text>
            <ProductComponent price='100' quantity='4' name='Product' id='Produc1'/>
          </View>
          <Text style={styles.details_text}>Recipient: {order.recipient}</Text>
          <Text style={styles.details_text}>Contact: {order.contacts}</Text>
          <Text style={styles.details_text}>Address: {order.address}</Text>
          <Text style={styles.details_text}>Quantity: {order.quantity}</Text>
          <Text style={styles.details_text}>Order Id: {order.id}</Text>   
          <Text style={styles.details_text}>Amount: {order.amount}</Text>     
        </View>
      </View>
  )
}
const Order = () => {
  const {value, setState} = useContext(MyContext)
  const [storeOrders, setStoreOrders] = useState();


  useEffect(()=>{
    getStoreOrders("dsdsf")
  },[value])


  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={Orders}
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