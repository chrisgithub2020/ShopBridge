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
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import sendData from "../../api_calls/seller/addItemToStore";
import ProductComponent from "../components/seller/shopItems";
import DataSkeletons from "@/api_calls/dataSkeletons";
import RestockModal from "../components/seller/restockModal";
import AddItemModal from "../components/seller/addItemModal";
import { Modalize } from "react-native-modalize";

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

const store = () => {
  const [currentView, setCurrentView] = useState("inventory");
  const [selectedValue, setCurrentValue] = useState("e");
  const [subCat, setSubCat] = useState<string>("cp");
  const [descText, setItemDescText] = useState("");
  const [numberOfImages, setNumberOfImages] = useState(0);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const modalRef = useRef<Modalize>(null);
  const addItemModal = useRef<Modalize>(null);

  const openModal = (event: NativeSyntheticEvent<any>) => {
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

  const changeSubCat = () => {
    switch (selectedValue) {
      case "e":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Cell Phone(Dumb phones)" value="cp" />
            <Picker.Item label="Smartphones" value="sp" />
            <Picker.Item label="Laptops" value="l" />
            <Picker.Item label="Desktop" value="d" />
            <Picker.Item label="Tablets" value="t" />
            <Picker.Item label="Ipads" value="i" />
            <Picker.Item label="Computer Accessories" value="ca" />
            <Picker.Item label="Phone Accessories" value="pa" />
            <Picker.Item label="Headphones & Headsets" value="h&h" />
            <Picker.Item label="Other Accessories" value="oa" />
          </Picker>
        );

      case "f":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Men's Clothing" value="mc" />
            <Picker.Item label="Women's Clothing" value="wc" />
            <Picker.Item label="Kid's Clothing" value="kc" />
            <Picker.Item label="Men's Shoes" value="ms" />
            <Picker.Item label="Women's Shoes" value="ws" />
            <Picker.Item label="Sneakers" value="s" />
            <Picker.Item label="Accessories" value="a" />
          </Picker>
        );

      case "h&k":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Furniture" value="f" />
            <Picker.Item label="Bedding" value="b" />
            <Picker.Item label="Kitchen Accessories" value="ka" />
            <Picker.Item label="Home and Decor" value="h&d" />
          </Picker>
        );

      case "b":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Haircare" value="hc" />
            <Picker.Item label="Skincare" value="sc" />
            <Picker.Item label="MakeUp" value="mu" />
            <Picker.Item label="Fragrance" value="fg" />
            <Picker.Item label="Body Care" value="bc" />
            <Picker.Item label="Men's Grooming" value="mg" />
          </Picker>
        );

      case "sp":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Fitness Equipments" value="fe" />
            <Picker.Item label="Sports Gears" value="sg" />
            <Picker.Item label="Outdoor Gear" value="og" />
            <Picker.Item label="Sports Wear" value="sw" />
          </Picker>
        );

      case "t":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Figures" value="af" />
            <Picker.Item label="Educational Toys" value="et" />
            <Picker.Item label="Board Games" value="bg" />
            <Picker.Item label="Video Games" value="vg" />
          </Picker>
        );

      case "bk":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Books And Media" value="bm" />
          </Picker>
        );

      case "g":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Fresh Produce" value="fp" />
            <Picker.Item label="Beverages" value="bv" />
            <Picker.Item label="Snacks" value="sk" />
            <Picker.Item label="Household Supplies" value="hhs" />
          </Picker>
        );

      case "h":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Medical Supplies" value="meds" />
            <Picker.Item label="Feminine Care" value="fc" />
          </Picker>
        );

      case "a":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Car Accessories" value="ca" />
            <Picker.Item label="Tools and Equipments" value="t&e" />
          </Picker>
        );

      case "p":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Pet Food" value="pf" />
            <Picker.Item label="Pet Toys" value="pt" />
            <Picker.Item label="Grooming Supplies" value="gs" />
            <Picker.Item label="Pet Habitat & Restraints" value="phr" />
          </Picker>
        );

      case "o":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={subCat}
            onValueChange={(itemValue) => setSubCat(itemValue)}
          >
            <Picker.Item label="Stationery" value="stat" />
            <Picker.Item label="Office Furniture" value="of" />
          </Picker>
        );
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
        <RestockModal
          refObject={modalRef}
          restock={() => console.log("Restocking..")}
        />
        <AddItemModal formDetails={formDetails} refObject={addItemModal} chooseItemImages={chooseItemImagaes} onSubmit={submititemDetails}/>
        <FlatList
          style={styles.flatContainer}
          data={Products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductComponent product={item} onRestock={openModal} />
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
    padding: 8,
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
