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
import { MyContext, ProvideContext } from "../../context/myContext";
import saveCartToken from "../../storage/saveToCart"
import getProductDetails from "../../api_calls/consumer/getProductDetails"
import getCategoryProducts from "../../api_calls/consumer/category"
import { MaterialIcons } from "@expo/vector-icons";
import CatDict from "../../api_calls/Categories"
import searchProductInDB from "../../api_calls/consumer/searchProduct"
import { ProductData } from "@/constants/types";
import getItemImages from "../../api_calls/consumer/fetchImages"

let detailsImage: string

let Products: ProductData[] = [];

const ConsumerHome = ({navigation}: {navigation: any}) => {
  const screenWidth = Dimensions.get("window").width;
  const numColumns = Math.floor(screenWidth / 170);
  const modalRef = useRef<Modalize>(null)
  
  const { cart, filter, setFilter } = ProvideContext()
  const [todayProducts, setTodayProducts] = useState<any>()
  const [itemDetails, setItemDetails] = useState<any>({"name":"","photos":""})
  const [itemDetailsImageId, setItemDetailsImageId] = useState<string | null>(null)
  const [checkProductDetails, setCheckProductDetails] = useState<boolean>(false)
  const [showCat, setShowCat] = useState<string>("hide")

  const getTodayProducts = async ()=>{    
    const res = await getHomepageProducts()
    Products.length = 0
    res.forEach((item: any)=>{
      let _i = {"name":item["itemName"], "price":item["itemPrice"],"id":item["id"], "store_name":item["storeName"], "photo":item["itemImages"]}
      Products.push(_i)
      setTodayProducts(_i)
    })

  }

  const searchProduct = async (text: string) => {
    console.log(text)
    if (text.length === 0){
      Products.length = 0
      getTodayProducts()
    }
    let newData = Products.filter(item => item.name.includes(text))
    if (newData.length === 0 && text.length > 0){
      let result = await searchProductInDB(text)
      if (result.length > 0){

      } else {
        console.log("online result")
        ToastAndroid.show("We have no such product. Will get one soon", ToastAndroid.SHORT)
      }
    } else {
      Products = newData
      setTodayProducts(Products)
    }

  }



  const openModal = () => {
    modalRef.current?.open()
  }

  const closeModal = () => {
    modalRef.current?.close()
  }

  

  const ProductDetails = async (ProductID: String) => {
    const detail = await getProductDetails(ProductID)
    let _i = {"name":detail["itemName"], "price":detail["itemPrice"], "description":detail["itemDesc"], "photos":""}
    setItemDetails(_i)
    detailsImage = detail["itemImages"]
  }

  useEffect(()=>{
    if (checkProductDetails) {
      if (itemDetails){
        openModal()
        setItemDetailsImageId(detailsImage)
      }
    }
  },[itemDetails, checkProductDetails])

  useEffect(()=> {
    const getCatItems = async () => {
      const result =  await getCategoryProducts(filter?.mainCat, filter?.subCat)
      if (result.length === 0){
        ToastAndroid.show("We have no Products in this category", ToastAndroid.SHORT)
        return false
      }
      setShowCat(CatDict[filter!.subCat.toString()])
      result.forEach((item: any)=>{
        let _i:ProductData = {"name":item["itemName"], "price":item["itemPrice"],"id":item["id"], "store_name":item["storeName"], "photo":""}
        Products.length = 0
        Products.push(_i)
        setTodayProducts(_i)
      })
    }
    
    if (filter!.mainCat != "" && filter!.subCat.length != 0){
      getCatItems()
    }
  },[filter])

  useEffect(()=>{
    getTodayProducts()
  },[])
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.searchbar}>
          <TextInput onChangeText={(text: string)=> {searchProduct(text)}} style={{ backgroundColor: "#e6e1e1", height: "100%", width: "100%", borderRadius: 5, padding: 10, marginRight: 5, }} placeholder="Search here" />
        </View>
        <View style={[styles.catFilter, showCat === "hide" && styles.hideCatFilter]}>
          <View style={{flexDirection: "row", flex: 10}}>
            <MaterialIcons style={{fontWeight: "bold", color: "white"}} name="filter-list" size={20}/>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 15, textAlign: "center"}}>  {showCat}</Text>
          </View>
          <TouchableOpacity style={{flex: 1.5, borderLeftWidth:1.5, borderLeftColor: "white"}} onPress={()=>{
            setShowCat("hide")
            setFilter({mainCat: "", subCat: []})
            Products.length = 0
            getTodayProducts()
          }}>
            <MaterialIcons style={{color: "white", fontWeight: "bold", marginLeft: 5}} name="close" size={20}/>
          </TouchableOpacity>
        </View>
        <ProductDetailsModal imageId={itemDetailsImageId} onClose={()=>{setCheckProductDetails(false)}} product={itemDetails} refObject={modalRef} addToCart={() => console.log("adding to cart")} />
        
        <FlatList style={styles.flatContainer}
          data={Products}
          extraData={todayProducts}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.productsContainer}
          renderItem={({ item }) => <ProductComponent inCart={cart.current!.includes(item.id)}  addToCart={() => {
            if (!cart.current?.includes(item.id)) {
              cart.current?.push(item.id);
              saveCartToken(cart.current);
              ToastAndroid.show("Item Addedd to Cart", ToastAndroid.SHORT);
            } else {
              console.log(cart.current)
              const index = cart.current.indexOf(item.id)
              cart.current.splice(index, 1)
              saveCartToken(cart.current)
              ToastAndroid.show("Item Removed From Cart", ToastAndroid.SHORT)
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
    paddingTop: 8,
  },
  catFilter: {
    height: "6%",
    width: "60%",
    position: "absolute",
    left: "20%",
    top: "91%",
    flexDirection: "row",
    backgroundColor: "#2196f3",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
    elevation: 10,
  },
  hideCatFilter: {
    display: "none"
  },
  productsContainer: {
  }
});
