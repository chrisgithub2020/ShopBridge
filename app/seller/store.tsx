import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
  NativeSyntheticEvent,
} from "react-native";
import React, { useState, useRef, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import sendData from "../../api_calls/seller/addItemToStore";
import restockItem from "../../api_calls/seller/restockItem"
import ProductComponent from "../components/seller/shopItems";
import DataSkeletons from "@/api_calls/dataSkeletons";
import RestockModal from "../components/seller/restockModal";
import AddItemModal from "../components/seller/addItemModal";
import { Modalize } from "react-native-modalize";
import { MyContext } from "../components/consumer/myContext";

let itemImages: Array<String | null | undefined> = [];


interface StoreProduct {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

DataSkeletons.itemDetails.itemImages = itemImages;

const Products: StoreProduct[] = [
  { id: "1", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "2", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "3", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "4", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "5", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "6", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "7", name: "Gold Watch", price: "500", quantity: "23" },
];
const RestockItem = async (id: String, amount: String) => {
  const formData = {
    itemID:id,
    restockNumber:amount,
  }

  console.log(amount)

  await restockItem(formData)
}

const store = () => {
  let itemToRestockID = "";
  let amountToRestock: String = "";
  const [selectedValue, setCurrentValue] = useState("e");
  const [subCat, setSubCat] = useState<string>("cp");
  const [descText, setItemDescText] = useState("");
  const [numberOfImages, setNumberOfImages] = useState(0);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const {value, setState} = useContext(MyContext);
  const modalRef = useRef<Modalize>(null);
  const addItemModal = useRef<Modalize>(null);

  const openModal = () => {
    modalRef.current?.open()
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

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

  const submititemDetails = () => {
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
      console.log(DataSkeletons.itemDetails);
      sendData(DataSkeletons.itemDetails);
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.searchbar}>
          <TextInput
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
        <RestockModal setAmountToRestock={(text: String)=> amountToRestock = text}
          refObject={modalRef}
          restock={()=> RestockItem(itemToRestockID,amountToRestock)}
        />
        <AddItemModal formDetails={formDetails} refObject={addItemModal} chooseItemImages={chooseItemImagaes} onSubmit={submititemDetails}/>
        <FlatList
          style={styles.flatContainer}
          data={Products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductComponent product={item} onRestock={() => {
              itemToRestockID = item.id;
              console.log(itemToRestockID)
              openModal()
            }} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default store;

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
    marginBottom: 60,
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
});
