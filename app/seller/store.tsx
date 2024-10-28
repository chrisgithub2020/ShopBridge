import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker"

interface StoreProduct {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

interface StoreProductProp {
  product: StoreProduct;
}

const Products: StoreProduct[] = [
  { id: "1", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "2", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "3", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "4", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "5", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "6", name: "Gold Watch", price: "500", quantity: "23" },
  { id: "7", name: "Gold Watch", price: "500", quantity: "23" },
];

const ProductComponent: React.FC<StoreProductProp> = ({ product }) => {
  return (
    <View style={styles.supplies_container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={styles.image}
            source={require("../../resources/file.png")}
          />
        </View>
        <View style={styles.abt_container}>
          <Text style={{ height: "40%", marginTop: 10 }}>{product.name}</Text>
          <Text style={{ height: "17%" }}>{product.price}</Text>
          <Text style={{ height: "17%" }}>{product.quantity}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.supplies_button}>
          <Text style={styles.supplies_button_test}>Take Down</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supplies_button}>
          <Text style={styles.supplies_button_test}>Restock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const store = () => {
  const [currentView, setCurrentView] = useState("inventory");
  const [selectedValue, setCurrentValue] = useState("e");
  const [subCat, setSubCat] = useState("elect");
  const [height, setItemDescHeight] = useState(40);
  const [descText, setItemDescText] = useState("")
  const [numberOfImages, setNumberOfImages] = useState(0)

  
const chooseItemImagaes = async () => {
  let imagesObj = await ImagePicker.launchImageLibraryAsync(
    {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64:true,
      allowsMultipleSelection:true,
      quality: 1,
      aspect: [4,3]
    }
  )

  if (!imagesObj.canceled){
    console.log(imagesObj)
    setNumberOfImages(imagesObj.assets.length)
  } else {
    console.log("images canceled")
  }
}

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

  const changeView = () => {
    switch (currentView) {
      case "inventory":
        return (
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
                onPress={() => setCurrentView("add_item")}
                style={{
                  backgroundColor: "white",
                  width: "10%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons
                  style={{ color: "#e6e1e1" }}
                  size={30}
                  name="add"
                />
              </TouchableOpacity>
            </View>
            <FlatList
              style={styles.flatContainer}
              data={Products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ProductComponent product={item} />}
            />
          </View>
        );

      case "add_item":
        return (
          <View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 55,
                justifyContent: "space-between",
                backgroundColor: "white",
                padding: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => setCurrentView("inventory")}
                style={{
                  width: "15%",
                  marginLeft: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons style={{}} size={25} name="arrow-back" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#2196f3",
                  width: "60%",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    paddingTop: 13,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Add Item
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{
                backgroundColor: "white",
                padding: 10,
                height: "100%",
                borderTopWidth: 5,
                borderTopColor: "#e6e1e1",
              }}
            >
              <Text style={styles.add_item_text}>Select Item Photos</Text>
              <Text style={{justifyContent: "center", alignSelf: "center", padding: 6}}>{numberOfImages} images selected</Text>
              <TouchableOpacity
                onPress={chooseItemImagaes}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#2196f3",
                  height: 40,
                  borderRadius: 5,
                }}
              >
                <MaterialIcons name="photo" size={20} />
                <Text style={styles.add_item_text}>Select Images</Text>
              </TouchableOpacity>
              <Text style={styles.add_item_text}>Item Name</Text>
              <TextInput
                style={styles.add_item_textinput}
                placeholder="Name of item"
              />
              <Text style={styles.add_item_text}>Item description</Text>
              <TextInput
                multiline
                style={[styles.add_item_textinput, { height, maxHeight:600 }]}
                onChangeText={setItemDescText}
                onContentSizeChange={(event) => {
                  setItemDescHeight(event.nativeEvent.contentSize.height);
                }}
                value={descText}
                placeholder="Description of item"
              />
              <Text style={styles.add_item_text}>Select main Category</Text>
              <Picker
                style={styles.cat_picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setCurrentValue(itemValue)}
              >
                <Picker.Item label="Electronics" value="e" />
                <Picker.Item label="Fashion" value="f" />
                <Picker.Item label="Home & Kitchen" value="h&k" />
                <Picker.Item label="Beauty" value="b" />
                <Picker.Item label="Sports" value="sp" />
                <Picker.Item label="Toys" value="t" />
                <Picker.Item label="Books" value="bk" />
                <Picker.Item label="Groceries" value="g" />
                <Picker.Item label="Health" value="h" />
                <Picker.Item label="Automotive" value="a" />
                <Picker.Item label="Pet" value="p" />
                <Picker.Item label="Office" value="o" />
              </Picker>
              <View>
                <Text style={styles.add_item_text}>Select Sub Category</Text>
                {changeSubCat()}
              </View>
              <Text style={styles.add_item_text}>Quantity:</Text>
              <TextInput
                style={styles.add_item_textinput}
                placeholder="Quantity in stock"
              />
              <Text style={styles.add_item_text}>Price of Item</Text>
              <TextInput
                style={styles.add_item_textinput}
                placeholder="Price of Item"
              />
            </ScrollView>
          </View>
        );
    }
  };
  return <SafeAreaView style={styles.container}>{changeView()}</SafeAreaView>;
};

export default store;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e1e1",
    flex: 1,
  },
  supplies_container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 7,
    height: 200,
    marginTop: 6,
  },

  image: {
    height: 150,
    width: 150,
  },
  abt_container: {
    flexDirection: "column",
  },
  supplies_button: {
    backgroundColor: "#2196f3",
    width: "45%",
    height: 35,
    borderRadius: 5,
  },
  supplies_button_test: {
    padding: 8,
    justifyContent: "center",
    alignSelf: "center",
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
