import {
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import getHomepageProducts from "../../api_calls/consumer/getHompageProducts"
import { Modalize } from "react-native-modalize";
import ProductComponent from "../components/consumer/homePage"
import ProductDetailsModal from "../components/consumer/productDetailsModal"
import { MyContext } from "../../context/myContext";
import saveCartToken from "../../storage/saveToCart"
import getProductDetails from "../../api_calls/consumer/getProductDetails"

interface ProductData {
  id: string;
  name: string;
  price: string;
  store_name: string;
  photo: string;
}



const Products: ProductData[] = [
];







const ConsumerHome = () => {
  const screenWidth = Dimensions.get("window").width;
  const numColumns = Math.floor(screenWidth / 170);
  const modalRef = useRef<Modalize>(null)
  
  const { value, setState } = useContext(MyContext)
  const [todayProducts, setTodayProducts] = useState<any>()
  const [productDetails, setProductDetails] = useState<any>({"name":""})

  const openModal = () => {
    modalRef.current?.open()
  }

  const closeModal = () => {
    modalRef.current?.close()
  }

  

  const ProductDetails = async (ProductID: String) => {
    const detail = await getProductDetails(ProductID)
    for (let h in detail){
      let _i = {"name":detail[h][1], "price":detail[h][2], "description":detail[h][3], "photos":Array(detail[h][0])}
      setProductDetails(_i)
    }
  }

  useEffect(()=>{
    if (productDetails){
      openModal()
    }
  },[productDetails])

  useEffect(()=>{
    const getStoreIt = async ()=>{    
      console.log(value.cart)
      const res = await getHomepageProducts()
      res.forEach((item: any)=>{
        let _i = {"name":item[1], "price":item[2],"id":item[0], "store_name":item[3], "photo":Array(item[4])[0]}
        Products.push(_i)
        setTodayProducts(_i)
      })
    }
    getStoreIt()
  },[value])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.searchbar}>
          <TextInput style={{ backgroundColor: "#e6e1e1", height: "100%", width: "100%", borderRadius: 5, padding: 10, marginRight: 5, }} placeholder="Search here" />
        </View>
        <ProductDetailsModal product={productDetails} refObject={modalRef} addToCart={() => console.log("adding to cart")} />
        
        <FlatList style={styles.flatContainer}
          data={Products}
          extraData={todayProducts}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          renderItem={({ item }) => <ProductComponent  addToCart={() => {
            if (!value.cart.includes(item.id)) {
              value.cart.push(item.id);
              setState(value);
              saveCartToken(value.cart);
              ToastAndroid.show("Item Addedd to Cart", ToastAndroid.SHORT);
            } else {
              const index = value.cart.indexOf(item.id)
              value.cart.splice(index, 1)
              setState(value)
              saveCartToken(value.cart)
              ToastAndroid.show("Item Removed From Cart", ToastAndroid.SHORT)
              console.log("Cart updated")
            }
          } } product={item} onClick={() => {
            console.log(item.id);
            ProductDetails(String(item.id));
          } }/>}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConsumerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e1e1",
  },
  button: {
    backgroundColor: "#2196f3",
    borderRadius: 5,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  searchbar: {
    height: 60,
    backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
  },
  flatContainer: {
    padding: 8,
  },
});
