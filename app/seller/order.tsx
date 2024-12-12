import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, ToastAndroid, RefreshControl} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useContext, useEffect, useState, useRef,} from 'react'
import { MyContext } from '../../context/myContext'
import getStoreOrders from "../../api_calls/seller/getStoreOrders"
import { useFocusEffect } from 'expo-router'
import { Modalize } from 'react-native-modalize'
import OrderActionsMOdal from "../components/seller/orderModal"
import orderAction from "../../api_calls/seller/orderAction"
import checkOrderStatus from "../../api_calls/seller/orderStatus"
import { store } from 'expo-router/build/global-state/router-store'

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
  storeProducts: StoreProduct[]
  onClick: () => void;
}

const Orders: Order[] = [
]


interface StoreProduct {
  id: string;
  name: string;
  quantity: string;
  price: string;
  photo: string;
}

interface StoreProductProp {
  product: StoreProduct
}


const ProductComponent: React.FC<StoreProduct> = ({ name, quantity,price, photo }) => {
  return (
    <View style={styles.supplies_container}>
          <View style={{flexDirection:"row"}}>
            <View>
              <Image resizeMode="contain" style={styles.image} source={{uri:`data:image/png;base64,${photo}`}}/>
            </View>
            <View style={styles.abt_container}>
              <Text style={{height:"40%", marginTop:10,}}>{name}</Text>
              <Text style={{height:"17%"}}>{price}</Text>
            </View>
          </View>          
        </View>
  )
}

const OrderComponent: React.FC<OrderProp> = ({order, storeProducts, onClick}) => {
  const orderProduct = storeProducts.filter(items => items.id === order.product)[0]
  return (
    <TouchableOpacity onPress={onClick} style={styles.order_container}>
        <View>
          <View>
            <Text>Order: {order.id}</Text>
            <ProductComponent photo={orderProduct.photo} price={orderProduct.price} quantity='4' name={orderProduct.name} id={order.product}/>
          </View>
          <Text style={styles.details_text}>Recipient: {order.recipient}</Text>
          <Text style={styles.details_text}>Contact: {order.contacts}</Text>
          <Text style={styles.details_text}>Address: {order.address}</Text>
          <Text style={styles.details_text}>Quantity: {order.quantity}</Text>
          <Text style={styles.details_text}>Amount: {order.amount}</Text>     
        </View>
      </TouchableOpacity >
  )
}
const Order = ({navigation}: {navigation: any}) => {
  const {value, setState, storeProducts} = useContext(MyContext)
  const [storeOrders, setStoreOrders] = useState<any>();
  const orderActionsModal = useRef<Modalize>(null);
  const [actionID, setActionID] = useState<string>()
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const openModal = ()=>{
    orderActionsModal.current?.open();
  }

  const closeModal = () => {
    orderActionsModal.current?.close();
  }

  const cancelOrder = async () => {
    console.log("order cancelled",actionID);
    const result = await orderAction({id:actionID, action:"cancel"})
    ToastAndroid.show("Order Cancelled. User has been notified", ToastAndroid.SHORT)
    closeModal()
  }

  const dispatchOrder = async () => {
    console.log("order dispatched", actionID);
    const result = await orderAction({id:actionID, action:"dispatch"})
    if (result){
      ToastAndroid.show("Order Dispatched. User has been notified", ToastAndroid.SHORT)
      closeModal()
    }
  }

  const searchStore = (text: string) => {
    console.log(text)
  }

  const onRefresh = () => {
    if (Boolean(storeProducts)){
      getStoreOrd()
    }
  }

  const orderStatus = async (id: string)=>{
    const result = await checkOrderStatus(id)
    console.log(result)
    if (result === "cancelled"){
      console.log("order cancelled")
      ToastAndroid.show("Order was cancelled", ToastAndroid.SHORT)
    } else if (result === "dispatch") {
      ToastAndroid.show("Order was dispatched", ToastAndroid.SHORT)
      console.log("order dispatched")
    } else {
      openModal()
    }
  }

  const getStoreOrd = async () => {
    let result = await getStoreOrders(value.id)
    result.forEach((element: any) => {
      let _i = {"id":element[0],"product":element[3], "recipient":(element[1]+" " +element[2]), "contacts":element[4], "address":element[5], "amount":element[6], "quantity":element[7] }      
      if (!Orders.includes(_i)){
        Orders.push(_i)
      }
      setStoreOrders(Orders)
      
    });

  }


  useFocusEffect(React.useCallback(()=>{
    if(storeProducts){
      getStoreOrd()
    }
  },[storeProducts]))


  return (
    <SafeAreaView style={styles.container}>
      <OrderActionsMOdal dispatchOrder={dispatchOrder} refObject={orderActionsModal} cancelOrder={cancelOrder}/>
      <FlatList 
        data={Orders}
        extraData={storeOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderComponent onClick={()=>{
          setActionID(item.id)
          orderStatus(item.id)
        }} storeProducts={storeProducts} order={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
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
    elevation: 5,
  },
  supplies_container: {
    backgroundColor: "#e6e1e1",
    borderRadius: 5,
    padding:7,
    height:110,
    marginTop:6,
    justifyContent: "center",
  },

  image: {
    height: 110,
    width: 100,
  },
  abt_container: {
    flexDirection: "column",
    padding: 5,
  },
  details_text: {
    width: "100%",
    height:35,
    paddingTop:10,
  },
})