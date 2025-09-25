import {
  StyleSheet,
  FlatList,
  ToastAndroid,
  RefreshControl
} from "react-native";
import React, { useState, useRef, useEffect,} from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import CardItemComponent from "../components/consumer/cartItems"
import {  ProvideContext } from "../../context/myContext";
import { Modalize } from "react-native-modalize";
import { Paystack, paystackProps,  } from "react-native-paystack-webview"
import CompleteOrderModal from "../components/consumer/completeOrderModal"
import getCartContent from "../../api_calls/consumer/getCartContent"
import saveCartToken from "@/storage/saveToCart";
import DataSkeletons from "@/api_calls/dataSkeletons";
import CompleteOrder from "../../api_calls/consumer/CompleteOrder";
import { CartItem, OrderObject } from "@/constants/types";

import KEYS from "../../api_calls/Keys"
const constants = KEYS()

let CartItemsData: CartItem[] = [];
const paystackKey = constants.PAYSTACK_KEY



const Cart = () => {
  const { a_token,cart, setStoreItems} = ProvideContext()
  const completeOrderModal = useRef<Modalize>(null)
  const [cartExtraData, setCartExtraData] = useState<any>()
  const [orderToCompleteDetails, setOrderToCompleteDetails] = useState<OrderObject>({"id":"", "ProductName": "sdfjasdf", "quantity": "3",  "price": "78", "deliveryFees": "9.5"});
  const payStackRef = useRef<paystackProps.PayStackRef>(null)
  const [refresh, setRefresh] = useState<boolean>(false)

  const removeItemFromFlatlist = (id: string) => {
    const newData = CartItemsData.filter(item => item.id !== id)
    CartItemsData = newData
    setCartExtraData(CartItemsData)
  }

  const getCartCont = async () => {
    if (cart.current) {
      if (cart.current.length > 0) {
        let items = await getCartContent(cart.current.toString(), a_token.current)
        CartItemsData.length = 0
        for (let i in items) {
          let _i = { "id": items[i]["id"], "name": items[i]["itemName"], "price": items[i]["itemPrice"], "quantity": "1", "photoId":items[i]["itemImages"]}
        
          CartItemsData.push(_i)
          setCartExtraData(_i)
        }
      }else {
        CartItemsData.length = 0
        setCartExtraData({})
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
    DataSkeletons.orderDetails.product = orderToCompleteDetails.id
    DataSkeletons.orderDetails.quantity = orderToCompleteDetails.quantity
    DataSkeletons.orderDetails.amountPaid = (Number(orderToCompleteDetails.price)*Number(orderToCompleteDetails.quantity)) + Number(orderToCompleteDetails.deliveryFees)
    const response = await CompleteOrder(DataSkeletons.orderDetails)
    if (response){
      ToastAndroid.show("Order Completed", ToastAndroid.SHORT)
      let itemIndex = cart.current!.indexOf(orderToCompleteDetails.id)
      cart.current?.splice(itemIndex,1)
      removeItemFromFlatlist(orderToCompleteDetails.id)
      closeCompleteOrderModal()
      saveCartToken(cart.current)
    }
    console.log(response)
  }

  const checkOut = (id: string) => {
    let details: OrderObject = {"id":"", "ProductName": "sdfjasdf", "quantity": "3", "price": "78", "deliveryFees": "9.5"}
    for (let orderItemIndex in CartItemsData){
      if (CartItemsData[orderItemIndex]["id"] === id){
        details = {"id":id, "ProductName":CartItemsData[Number(orderItemIndex)]["name"], "price":CartItemsData[Number(orderItemIndex)]["price"], "quantity":CartItemsData[Number(orderItemIndex)]["quantity"], "deliveryFees":"9.5"}
      }
      setOrderToCompleteDetails(details)
    }
    openCompleteOrderModal()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Paystack channels={['mobile_money']} currency="GHS" ref={payStackRef} activityIndicatorColor="green" onSuccess={()=>{
        completeOrder();
      }} onCancel={(e)=>{
        console.log("Payment cancelled")

      }} billingEmail="agyemanchris0@gmail.com" billingName="ShopBridge" paystackKey={paystackKey} amount={(Number(orderToCompleteDetails.price)*Number(orderToCompleteDetails.quantity)) + Number(orderToCompleteDetails.deliveryFees)}/>
      <CompleteOrderModal orderObject={orderToCompleteDetails} refObject={completeOrderModal} order={() => payStackRef.current?.startTransaction()} />
      <FlatList extraData={cartExtraData} refreshControl={<RefreshControl refreshing={refresh} onRefresh={getCartCont}/>} contentContainerStyle={styles.items_scroll} data={CartItemsData} keyExtractor={(item) => item.id} renderItem={({ item }) => <CardItemComponent removeFromCart={()=>{
        if (cart.current?.includes(item.id)){
          let index = cart.current.indexOf(item.id)
          cart.current.splice(index,1)
          removeItemFromFlatlist(item.id)  
          saveCartToken(cart.current)
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
