import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { Modalize } from "react-native-modalize"
import React, { useRef, useState } from "react"
import { OrderObject } from "@/constants/types";
import getItemImage from "@/api_calls/consumer/fetchImage";

interface modalProp {
  order: () => void;
  refObject: React.RefObject<Modalize>;
  orderObject: OrderObject;
}


interface StoreProduct {
  name: string;
  photo?: string;
}





const CompleteOrderModal = ({ order, refObject, orderObject }: modalProp) => {
  const modalRef = useRef<Modalize>(null);


  return (
    <Modalize modalStyle={{ zIndex: 1000 }} overlayStyle={{ zIndex: 999 }} adjustToContentHeight={true} ref={refObject}>
      <KeyboardAvoidingView style={{ padding: 8, }}>
        <View style={{margin: 3}}>
        </View>
        <View style={{marginBottom: 6,marginRight: 6, marginLeft: 6,borderBottomWidth: 2,  borderColor: "#e6e1e1", backgroundColor: "#e6e1e1", borderRadius:3,  }}>
          <View style={{flexDirection: "row", borderBottomWidth: 1, borderColor: "white", padding: 4}}>
            <Text style={{fontWeight: "bold",  width:"71%", justifyContent:"center"}}>Address</Text>
            <TouchableOpacity><Text style={{ color: "#2196f3" }}>Change Address</Text></TouchableOpacity>
          </View>
          <View style={{padding: 4}}>
            <Text style={{padding: 3}}></Text>
          </View>
        </View>
        <View style={{marginBottom: 6,marginRight: 6, marginLeft: 6,borderBottomWidth: 2, borderColor: "#e6e1e1", backgroundColor: "#e6e1e1", borderRadius:3,  }}>
          <View style={{flexDirection: "row", borderBottomWidth: 1, borderColor: "white", padding: 4}}>
            <Text style={{fontWeight: "bold", width:"71%", justifyContent:"center"}}>Payment Method</Text>
            <TouchableOpacity><Text style={{ color: "#2196f3" }}>Change Method</Text></TouchableOpacity>
          </View>
          <View style={{padding: 4}}>
            <Text style={{padding: 3}}>Mobile Money</Text>
          </View>
        </View>
        <View style={{marginBottom: 6,marginRight: 6, marginLeft: 6,borderBottomWidth: 2, borderColor: "#e6e1e1", backgroundColor: "#e6e1e1", borderRadius:3,  }}>
          <View style={{flexDirection: "row", borderBottomWidth: 1, borderColor: "white", padding: 4}}>
            <Text style={{fontWeight: "bold", }}>Summary</Text>
          </View>
          <View style={{padding: 4}}>
            <View style={{flexDirection: "row"}}>
              <Text style={{padding: 3, width: "72%"}}>Unit Price: </Text>
              <Text style={{padding: 3, alignSelf: "center"}}>GH₵ {orderObject.price}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <Text style={{padding: 3, width: "72%"}}>Quantity:  </Text>
              <Text style={{padding: 3, alignSelf: "center"}}>GH₵ {orderObject.quantity}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <Text style={{padding: 3, width: "72%"}}>Delivery Fees: </Text>
              <Text style={{padding: 3, alignSelf: "center"}}>GH₵ {orderObject.deliveryFees}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <Text style={{padding: 3, width: "72%"}}>Total Amount: </Text>
              <Text style={{padding: 3, alignSelf: "center"}}>GH₵ {(Number(orderObject.price)*Number(orderObject.quantity)) + Number(orderObject.deliveryFees)}</Text>
            </View>            
          </View>
        </View>

        <TouchableOpacity onPress={order} style={styles.modalButton}>
          <Text style={{ alignSelf: "center", fontWeight: "bold", color: "white" }}>Complete Order</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modalize>
  )
}

export default CompleteOrderModal

const styles = StyleSheet.create({
  modalButton: {
    backgroundColor: "#2196f3",
    borderRadius: 7,
    height: 50,
    justifyContent: "center"
  },
  product_images_container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "white",
  },
  product_images: {
    height: 300,
    width: "85%",
  },
  change_image_button: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  product_details: {
    borderTopWidth: 2,
    borderTopColor: "#e6e1e1",
    backgroundColor: "white",
    padding: 3,
  },
  supplies_container: {
    backgroundColor: "#e6e1e1",
    borderRadius: 5,
    padding: 7,
    height: 80,
    marginTop: 6,
  },
  abt_container: {
    justifyContent: "center"
  },
  image: {
    height: 70,
    width: 100,
  },
})