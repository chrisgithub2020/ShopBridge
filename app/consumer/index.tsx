import {
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  TextInput,
  ToastAndroid,
   Text,
   TouchableOpacity,
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
import getCategoryProducts from "../../api_calls/consumer/category"
import { MaterialIcons } from "@expo/vector-icons";

interface ProductData {
  id: string;
  name: string;
  price: string;
  store_name: string;
  photo: string;
}



const Products: ProductData[] = [
];







const ConsumerHome = ({navigation}: {navigation: any}) => {
  const screenWidth = Dimensions.get("window").width;
  const numColumns = Math.floor(screenWidth / 170);
  const modalRef = useRef<Modalize>(null)
  
  const { value, setState, filter, setFilter } = useContext(MyContext)
  const [todayProducts, setTodayProducts] = useState<any>()
  const [productDetails, setProductDetails] = useState<any>({"name":"","photos":""})
  const [checkProductDetails, setCheckProductDetails] = useState<boolean>(false)
  const [showCat, setShowCat] = useState<string>("hide")

  const getTodayProducts = async ()=>{    
    const res = await getHomepageProducts()
    res.forEach((item: any)=>{
      let _i = {"name":item[1], "price":item[2],"id":item[0], "store_name":item[3], "photo":Array(item[4])[0]}
      Products.push(_i)
      setTodayProducts(_i)
    })
  }




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
    if (checkProductDetails) {
      if (productDetails){
        openModal()
      }
    }
  },[productDetails, checkProductDetails])

  useEffect(()=> {
    const getCatItems = async () => {
      setShowCat("false")
      const result =  await getCategoryProducts(filter.mainCat, filter.subCat)
      result.forEach((item: any)=>{
        let _i = {"name":item[1], "price":item[2],"id":item[0], "store_name":item[3], "photo":Array(item[4])[0]}
        Products.length = 0
        Products.push(_i)
        setTodayProducts(_i)
      })
    }
    if (filter.mainCat != "" && filter.subCat.length != 0){
      getCatItems()
    }
  },[filter])

  useEffect(()=>{
    getTodayProducts()
  },[value])
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.searchbar}>
          <TextInput style={{ backgroundColor: "#e6e1e1", height: "100%", width: "100%", borderRadius: 5, padding: 10, marginRight: 5, }} placeholder="Search here" />
        </View>
        <View style={[styles.catFilter, showCat === "hide" && styles.hideCatFilter]}>
          <Text style={{width: "92%"}}>Hii</Text>
          <TouchableOpacity onPress={()=>{
            setShowCat("hide")
            setFilter({mainCat: "", subCat: []})
            Products.length = 0
            getTodayProducts()
          }}>
            <MaterialIcons name="close" size={20}/>
          </TouchableOpacity>
        </View>
        <ProductDetailsModal onClose={()=>{setCheckProductDetails(false)}} product={productDetails} refObject={modalRef} addToCart={() => console.log("adding to cart")} />
        
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
            setCheckProductDetails(true)
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
  catFilter: {
    height: 40,
    flexDirection: "row",
    padding: 4,
    backgroundColor: "white",
    borderTopColor: "#e6e1e1",
    borderTopWidth: 2,
    justifyContent: "center", 
    alignItems: "center",
  },
  hideCatFilter: {
    display: "none"
  }
});
