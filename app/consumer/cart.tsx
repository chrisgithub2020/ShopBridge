import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ToastAndroid,
  RefreshControl
} from "react-native";
import React, { useState, useRef, useContext, useEffect, useCallback,} from "react";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context"
import CardItemComponent from "../components/consumer/cartItems"
import { MyContext } from "../../context/myContext";
import { Modalize } from "react-native-modalize";
import { Paystack, paystackProps,  } from "react-native-paystack-webview"
import CompleteOrderModal from "../components/consumer/completeOrderModal"
import getCartContent from "../../api_calls/consumer/getCartContent"
import saveCartToken from "@/storage/saveToCart";
import DataSkeletons from "@/api_calls/dataSkeletons";
import CompleteOrder from "../../api_calls/consumer/CompleteOrder";
import { CartItem } from "@/constants/types";

import KEYS from "../../api_calls/Keys"
const constants = KEYS()

let CartItemsData: CartItem[] = [];
const paystackKey = constants.PAYSTACK_KEY
interface orderObj {
  ProductName: string;
  quantity: string;
  address: string;
  price: string;
  deliveryFees: string;
  photo: string;
  id: string;
}


const Cart = () => {
  const { value, setState } = useContext(MyContext)
  const completeOrderModal = useRef<Modalize>(null)
  const [cartExtraData, setCartExtraData] = useState<any>()
  const [orderToCompleteDetails, setOrderToCompleteDetails] = useState<orderObj>({"id":"", "ProductName": "sdfjasdf", "quantity": "3", "address": "Tabora", "price": "78", "deliveryFees": "9.5", "photo":""});
  const payStackRef = useRef<paystackProps.PayStackRef>(null)
  const [refresh, setRefresh] = useState<boolean>(false)

  const removeItemFromFlatlist = (id: string) => {
    const newData = CartItemsData.filter(item => item.id !== id)
    CartItemsData = newData
    setCartExtraData(CartItemsData)
  }


  const getCartCont = async () => {
    if (value) {
      if (value.cart.length > 0) {
        let content = await getCartContent(value.cart.toString())
        CartItemsData.length = 0
        console.log(content)
        for (let _t in content) {
          let _i = { "id": content[_t][2], "name": content[_t][1], "price": content[_t][3], "quantity": "1", "photo":Array(content[_t][0])[0]}
        
          CartItemsData.push(_i)
          setCartExtraData(_i)
        }
      }
    }
  }

  useEffect(()=>{
    getCartCont()
  },[])



  const openCompleteOrderModal = () => {
    completeOrderModal.current?.open()
  }

  const closeCompleteOrderModal = () => {
    completeOrderModal.current?.close()
  }

  const completeOrder = async () => {
    DataSkeletons.orderDetails.address = value.address
    DataSkeletons.orderDetails.consumer = value.id
    DataSkeletons.orderDetails.product = orderToCompleteDetails.id
    DataSkeletons.orderDetails.quantity = orderToCompleteDetails.quantity
    DataSkeletons.orderDetails.amountPaid = (Number(orderToCompleteDetails.price)*Number(orderToCompleteDetails.quantity)) + Number(orderToCompleteDetails.deliveryFees)
    const response = await CompleteOrder(DataSkeletons.orderDetails)
    if (response){
      ToastAndroid.show("Order Completed", ToastAndroid.SHORT)
      let itemIndex = value.cart.indexOf(orderToCompleteDetails.id)
      value.cart.splice(itemIndex,1)
      removeItemFromFlatlist(orderToCompleteDetails.id)
      closeCompleteOrderModal()
      saveCartToken(value.cart)
    }
    console.log(response)
  }

  const checkOut = (id: string) => {
    let details: orderObj = {"id":"", "ProductName": "sdfjasdf", "quantity": "3", "address": "Tabora", "price": "78", "deliveryFees": "9.5", "photo":""}
    for (let orderItemIndex in CartItemsData){
      if (CartItemsData[orderItemIndex]["id"] === id){
        details = {"id":id, "ProductName":CartItemsData[orderItemIndex]["name"], "photo":CartItemsData[orderItemIndex]["photo"], "price":CartItemsData[orderItemIndex]["price"], "address":String(value.address), "quantity":CartItemsData[orderItemIndex]["quantity"], "deliveryFees":"9.5"}
      }
      setOrderToCompleteDetails(details)
    }
    openCompleteOrderModal()
  }

  const oh: orderObj = {"id":"", "ProductName": "sdfjasdf", "quantity": "3", "address": "Tabora", "price": "78", "deliveryFees": "9.5", "photo":""}
  return (
    <SafeAreaView style={styles.container}>
      <Paystack channels={['mobile_money']} currency="GHS" ref={payStackRef} activityIndicatorColor="green" onSuccess={()=>{
        completeOrder();
      }} onCancel={(e)=>{
        console.log("Payment cancelled")

      }} billingEmail="agyemanchris0@gmail.com" billingName="ShopBridge" paystackKey={paystackKey} amount={(Number(orderToCompleteDetails.price)*Number(orderToCompleteDetails.quantity)) + Number(orderToCompleteDetails.deliveryFees)}/>
      <CompleteOrderModal orderObject={orderToCompleteDetails} refObject={completeOrderModal} order={() => payStackRef.current?.startTransaction()} />
      <FlatList extraData={cartExtraData} refreshControl={<RefreshControl refreshing={refresh} onRefresh={getCartCont}/>} contentContainerStyle={styles.items_scroll} data={CartItemsData} keyExtractor={(item) => item.id} renderItem={({ item }) => <CardItemComponent removeFromCart={()=>{
        if (value.cart.includes(item.id)){
          let index = value.cart.indexOf(item.id)
          value.cart.splice(index,1)
          removeItemFromFlatlist(item.id)          
          setState(value)
          saveCartToken(value.cart)
        }
      }} item={item} openCompleteOrderModal={()=>{
        checkOut(item.id)
        
        }} />} />
    </SafeAreaView>
  );
};


export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e1e1",
    flex: 1,
  },
  image: {
    width: 100,
    height: 120,
  },
  items_scroll: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  item_container: {
    backgroundColor: "white",
    width: "100%",
    height: 160,
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
  },
  quantity_button: {
    backgroundColor: "#2196f3",
    width: 47,
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderRadius: 4,
  },
  quantity_text: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: 40,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 6,
    paddingTop: 12,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
});
