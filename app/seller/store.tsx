import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  BackHandler,
  RefreshControl,
  ActivityIndicator
} from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import sendData from "../../api_calls/seller/addItemToStore";
import restockItem from "../../api_calls/seller/restockItem"
import ProductComponent from "../components/seller/shopItems";
import DataSkeletons from "@/api_calls/dataSkeletons";
import RestockModal from "../components/seller/restockModal";
import AddItemModal from "../components/seller/addItemModal";
import { Modalize } from "react-native-modalize";
import { MyContext, ProvideContext } from "../../context/myContext";
import TakeDownItemModal from "../components/seller/takeDownItemModal";
import getStoreItems from "../../api_calls/seller/getStoreItems";
import takeItemDown from "../../api_calls/seller/takeDown"
import getItemImage from "@/api_calls/consumer/fetchImage";

let itemImages: Array<String | null | undefined> = [];

BackHandler.addEventListener("hardwareBackPress", ()=>{
  BackHandler.exitApp()
  return true
})

interface StoreProduct {
  photo: string;
  id: string;
  name: string;
  quantity: string;
  price: string;
  description: string;
}

DataSkeletons.itemDetails.itemImages = itemImages;

let Products: StoreProduct[] = [
];

const Store = ({navigation}: {navigation: any}) => {
  let itemToRestockID = "";
  let amountToRestock: String = "";
  let takeDown: boolean = false;
  const [restockLoading, setRestockLoading] = useState<boolean>(false)
  const [takeDownLoading, setTakeDownLoading] = useState<boolean>(false)
  const [selectedValue, setCurrentValue] = useState("e");
  const [storeProductsSearch, setStoreProductsSearch] = useState<any>();
  const [subCat, setSubCat] = useState<string>("cp");
  const [descText, setItemDescText] = useState("");
  const [numberOfImages, setNumberOfImages] = useState(0);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [refreshing, serRefreshing] = useState<boolean>(false)
  const {a_token, r_token, storeItems, setStoreItems} = ProvideContext();
  const modalRef = useRef<Modalize>(null);
  const addItemModal = useRef<Modalize>(null);
  const takeDownItemModal = useRef<Modalize>(null)

  
const RestockItem = async (id: String, amount: String) => {
  setRestockLoading(true)
  const formData = {
    itemID:id,
    restockNumber:amount,
  }

  await restockItem(formData, a_token)
  setRestockLoading(false)
}

  const getStoreIt = async ()=>{
    const res = await getStoreItems(a_token.current)
    Products.length = 0
    res.forEach((item: any)=>{
      let _i = {"photo":item["itemImages"], "name":item["itemName"], "price":item["itemPrice"], "quantity": item["stockQuantity"], "description":item["itemDesc"], "id":item["id"]}
      Products.push(_i)
    })
    setStoreItems(Products)
    setStoreProductsSearch(Products)
  }
  
  useEffect(()=>{
    getStoreIt()
  }, [])

  const openModal = () => {
    modalRef.current?.open()
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const openTakeDownItemModal = () => {
    takeDownItemModal.current?.open()
  }

  const closeTakeDownItemModal = () => {
    takeDownItemModal.current?.close()
  }

  const openAddItemModal = () => {
    addItemModal.current?.open();
  };
  const closeAddItemModal = () => {
    addItemModal.current?.close();
  };

  const formDetails = {
    setItemDescText: setItemDescText,
    setItemName: setItemName,
    setItemQuantity: setItemQuantity,
    setItemPrice: setItemPrice,
    setSubCat: setSubCat,
    subCat: subCat,
    itemQuantity: itemQuantity,
    selectedValue: selectedValue,
    setCurrentValue: setCurrentValue,
    numberOfImages: numberOfImages,
  }

  const submititemDetails = async () => {
    DataSkeletons.itemDetails.itemMainCat = selectedValue;
    DataSkeletons.itemDetails.itemSubCat = subCat;
    DataSkeletons.itemDetails.itemDescription = descText;
    DataSkeletons.itemDetails.itemName = itemName;
    DataSkeletons.itemDetails.itemPrice = itemPrice;
    DataSkeletons.itemDetails.itemQuantity = itemQuantity;
    if (
      itemImages.length === 0 ||
      itemName == "" ||
      itemQuantity == "" ||
      itemPrice == "" ||
      descText == ""
    ) {
      ToastAndroid.show("All fields are required", ToastAndroid.SHORT);
    } else {
      const _i = await sendData(DataSkeletons.itemDetails, a_token.current);
      let item: StoreProduct = {"photo": Object(_i)["photo"], "id":Object(_i)["id"], "name":Object(_i)["name"],  "price":Object(_i)["price"], "quantity":Object(_i)["quantity"], "description": _i["description"]}
      Products.push(item)
      setStoreItems(_i)
      DataSkeletons.itemDetails.itemImages.length = 0
    }
  };

  const chooseItemImagaes = async () => {
    let imagesObj = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsMultipleSelection: true,
      quality: 1,
      aspect: [4, 3],
    });

    if (!imagesObj.canceled) {
      setNumberOfImages(imagesObj.assets.length);
      imagesObj.assets.forEach((images) => {
        itemImages.push(images.base64);
      });
    } else {
      console.log("images canceled");
    }
  };

  const searchStore = (text: string) => {
    if (text === ""){
      Products.length = 0
      getStoreIt()
      return 0
    }
    const newData = Products.filter(item => item.name.includes(text))
    Products = newData;
    setStoreProductsSearch(Products)
    if (newData.length === 0){
      ToastAndroid.show("You have no such item in your store", ToastAndroid.SHORT)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.searchbar}>
          <TextInput onChangeText={(text: string) => { 
            searchStore(text);
          }}
            style={{
              backgroundColor: "#e6e1e1",
              height: "100%",
              width: "90%",
              borderRadius: 5,
              padding: 10,
              marginRight: 5,
            }}
            placeholder="Search here"
          />
          <TouchableOpacity
            onPress={openAddItemModal}
            style={{
              backgroundColor: "white",
              width: "10%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons style={{ color: "#e6e1e1" }} size={30} name="add" />
          </TouchableOpacity>
        </View>
        <TakeDownItemModal loading={takeDownLoading} setStoreName={(text: String)=>{
          if (text === text){
            takeDown = true
          }
        }} refObject={takeDownItemModal} takeDown={()=>{
            console.log(takeDown)
          if (takeDown){
            takeItemDown("dsfd")
          } else {
            ToastAndroid.show("Store Name does not match!!", ToastAndroid.SHORT)
          }
        }}/>
        <RestockModal loading={restockLoading} setAmountToRestock={(text: String)=> amountToRestock = text}
          refObject={modalRef}
          restock={()=> RestockItem(itemToRestockID,amountToRestock)}
        />
        <AddItemModal formDetails={formDetails} refObject={addItemModal} chooseItemImages={chooseItemImagaes} onSubmit={submititemDetails}/>
        <FlatList extraData={storeProductsSearch}
          style={styles.flatContainer}
          data={Products}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getStoreIt} />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductComponent onTakeDown={() => {
              itemToRestockID = item.id;
              openTakeDownItemModal()
            }} product={item} onRestock={() => {
              itemToRestockID = item.id;
              openModal()
            }} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e1e1",
    flex: 1,
  },
  searchbar: {
    height: 60,
    backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
  },
  flatContainer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  add_item_textinput: {
    backgroundColor: "#e6e1e1",
    height: 40,
    borderRadius: 5,
    padding: 5,
  },
  cat_picker: {
    backgroundColor: "#e6e1e1",
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  add_item_text: {
    fontWeight: "bold",
    height: 30,
    justifyContent: "center",
    marginTop: 10,
  },
  loader: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    opacity: 0.5,
    zIndex: 1000
  }
});
