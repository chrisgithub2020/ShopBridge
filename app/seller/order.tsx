import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator, ToastAndroid, RefreshControl, BackHandler} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useContext, useEffect, useState, useRef,} from 'react'
import { MyContext, ProvideContext } from '../../context/myContext'
import getStoreOrders from "../../api_calls/seller/getStoreOrders"
import { useFocusEffect } from 'expo-router'
import { Modalize } from 'react-native-modalize'
import OrderActionsMOdal from "../components/seller/orderModal"
import orderState from "../../api_calls/seller/orderAction"
import checkOrderStatus from "../../api_calls/seller/orderStatus"
import { store } from 'expo-router/build/global-state/router-store'
import { StoreProduct } from '@/constants/types'
import getItemImage from '@/api_calls/consumer/fetchImage'
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





const ProductComponent = ({ name, price, photo }: { name: string, photo: string, price: string}) => {
  const [image, setImage] = useState<string>()
  const [imageLoading, setImageLoading] = useState<boolean>(true)

  if (imageLoading) {
    // this gets the images asynchronously without delaying main process
    getItemImage(photo).then((images)=>{
      setImage(images)
      setImageLoading(false)
    })
  }
  return (
    <View style={styles.supplies_container}>
          <View style={{flexDirection:"row"}}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Image resizeMode="contain" style={styles.image} source={{uri:`data:image/png;base64,${image}`}}/>
              {imageLoading && <ActivityIndicator style={{ flex: 1, position: "absolute"}} size="small" color="black" />}
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
            <ProductComponent photo={orderProduct.photo} price={orderProduct.price} name={orderProduct.name}/>
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

BackHandler.addEventListener("hardwareBackPress", ()=>{
  BackHandler.exitApp()
  return true
})

const Order = ({navigation}: {navigation: any}) => {
  const [storeOrders, setStoreOrders] = useState<any>();
  const orderActionsModal = useRef<Modalize>(null);
  const [orderId, setOrderId] = useState<string>()
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const {storeItems, a_token, r_token} = ProvideContext()
  const [dispatchLoading, setDispatchLoading] = useState<boolean>(false)
  const [cancelLoading, setCancelLoading] = useState<boolean>(false)

  const openModal = ()=>{
    orderActionsModal.current?.open();
  }

  const closeModal = () => {
    orderActionsModal.current?.close();
  }

  const cancelOrder = async () => {
    setCancelLoading(true)
    const result = await orderState({id:orderId, action:"cancelled"}, a_token.current, r_token.current)
    if (result === null) {
      navigation.replace('auth')
    }
    if ("refresh" in result) {
      a_token.current = result["refresh"]["a_token"]
      r_token.current = result["refresh"]["r_token"]
    }
    if (result["success"]){
      ToastAndroid.show("Order Dispatched. User has been notified", ToastAndroid.SHORT)
      closeModal()
    }
    setCancelLoading(false)
  }

  const dispatchOrder = async () => {
    setDispatchLoading(true)
    const result = await orderState({id:orderId, action:"dispatched"}, a_token.current, r_token.current)
    if (result === null) {
      navigation.replace("auth")
    }
    if ("refresh" in result) {
      a_token.current = result["refresh"]["a_token"]
      r_token.current = result["refresh"]["r_token"]
    }
    if (result["success"]){
      ToastAndroid.show("Order Dispatched. User has been notified", ToastAndroid.SHORT)
      closeModal()
    }
    setDispatchLoading(false)
  }

  const searchStore = (text: string) => {
    console.log(text)
  }

  const onRefresh = () => {
    if (Boolean(storeItems)){
      getStoreOrd()
    }
  }

  const orderStatus = async (id: string)=>{
    const result = await checkOrderStatus(id, a_token.current, r_token.current)
    if (result === null ){
      navigation.replace("auth")
    }
    if ("refresh" in result) {
      a_token.current = result["refresh"]["a_token"]
      r_token.current = result["refresh"]["r_token"]
    }
    if (result["data"] === "cancelled"){
      ToastAndroid.show("Order was cancelled", ToastAndroid.SHORT)
    } else if (result["data"] === "dispatch") {
      ToastAndroid.show("Order was dispatched", ToastAndroid.SHORT)
    } else {
      openModal()
    }
  }

  const getStoreOrd = async () => {
    let result = await getStoreOrders(a_token.current, r_token.current)
    if (result === null) {
      navigation.replace("auth")
    }
    Orders.length = 0
    if ("refresh" in result) {
      a_token.current = result["refresh"]["a_token"]
      r_token.current = result["refresh"]["r_token"]
    }
    result["data"].forEach((element: any) => {
      let _i = {"id":element["id"],"product":element["item"], "recipient":element["firstName"]+" "+element["lastName"], "contacts":element["phoneNumber"], "address":element["address"], "amount":element["amount"], "quantity":element["quatity"] }      
      Orders.push(_i)
      setStoreOrders(Orders)
      
    });

  }

  useEffect(()=>{
    getStoreOrd()
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <OrderActionsMOdal dispatchLoading={dispatchLoading} cancelLoading={cancelLoading} dispatchOrder={dispatchOrder} refObject={orderActionsModal} cancelOrder={cancelOrder}/>
      <FlatList 
        data={Orders}
        extraData={storeOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderComponent onClick={()=>{
          setOrderId(item.id)
          orderStatus(item.id)
        }} storeProducts={storeItems!=undefined ? storeItems:[]} order={item} />}
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