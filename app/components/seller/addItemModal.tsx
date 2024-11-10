import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

interface additemData {
    setItemDescText: React.Dispatch<React.SetStateAction<string>>;
    setItemName: React.Dispatch<React.SetStateAction<string>>;
    setItemQuantity: React.Dispatch<React.SetStateAction<string>>;
    setItemPrice: React.Dispatch<React.SetStateAction<string>>;
    setSubCat: React.Dispatch<React.SetStateAction<string>>;
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
    numberOfImages: number;
    subCat: String;
    selectedValue: String;
    itemQuantity: string;
}
interface modalProp {
  onSubmit: () => void;
  refObject: React.RefObject<Modalize>;
  chooseItemImages: () => void;
  formDetails: additemData;
}


const AddItemModal = ({ onSubmit, refObject, chooseItemImages, formDetails }: modalProp) => {
  const [height, setItemDescHeight] = useState(40);
  const [numberOfImages, setNumberOfImages] = useState(0);
  const changeSubCat = () => {
    switch (formDetails.selectedValue) {
      case "e":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
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
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
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
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
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
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
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
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
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
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
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
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
          >
            <Picker.Item label="Books And Media" value="bm" />
          </Picker>
        );

      case "g":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
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
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
          >
            <Picker.Item label="Medical Supplies" value="meds" />
            <Picker.Item label="Feminine Care" value="fc" />
          </Picker>
        );

      case "a":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
          >
            <Picker.Item label="Car Accessories" value="ca" />
            <Picker.Item label="Tools and Equipments" value="t&e" />
          </Picker>
        );

      case "p":
        return (
          <Picker
            style={styles.cat_picker}
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
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
            selectedValue={formDetails.subCat}
            onValueChange={(itemValue) => formDetails.setSubCat(String(itemValue))}
          >
            <Picker.Item label="Stationery" value="stat" />
            <Picker.Item label="Office Furniture" value="of" />
          </Picker>
        );
    }
  };

  return (
    <Modalize
      modalStyle={{ zIndex: 1000 }}
      overlayStyle={{ zIndex: 999 }}
      adjustToContentHeight={true}
      ref={refObject}
    >
      <KeyboardAvoidingView style={{ padding: 8, }}>
        <View>
          <Text style={styles.add_item_text}>Select Item Photos</Text>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              padding: 6,
            }}
          >
            {formDetails.numberOfImages} images selected
          </Text>
          <TouchableOpacity
            onPress={chooseItemImages}
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
            onChangeText={(text)=>formDetails.setItemName(text)}
            style={styles.add_item_textinput}
            placeholder="Name of item"
          />
          <Text style={styles.add_item_text}>Item description</Text>
          <TextInput
            multiline
            style={[styles.add_item_textinput, { height, maxHeight: 600 }]}
            onChangeText={(text)=>formDetails.setItemDescText(text)}
            onContentSizeChange={(event) => {
              setItemDescHeight(event.nativeEvent.contentSize.height);
            }}
            placeholder="Description of item"
          />
          <Text style={styles.add_item_text}>Select main Category</Text>
          <Text style={{alignSelf: "center", color: "red"}}>Press and hold on arrow beside picker to select category</Text>
          <Picker itemStyle={styles.pickerItemStyle}
            style={styles.cat_picker}
            selectedValue={formDetails.selectedValue}
            onValueChange={(itemValue) => formDetails.setCurrentValue(String(itemValue))}
          >
            <Picker.Item key={0} label="Electronics" value="e" />
            <Picker.Item  key={1} label="Fashion" value="f" />
            <Picker.Item  key={2} label="Home & Kitchen" value="h&k" />
            <Picker.Item  key={3} label="Beauty" value="b" />
            <Picker.Item  key={4} label="Sports" value="sp" />
            <Picker.Item  key={5} label="Toys" value="t" />
            <Picker.Item  key={6} label="Books" value="bk" />
            <Picker.Item  key={7} label="Groceries" value="g" />
            <Picker.Item  key={8} label="Health" value="h" />
            <Picker.Item  key={9} label="Automotive" value="a" />
            <Picker.Item  key={10} label="Pet" value="p" />
            <Picker.Item  key={11} label="Office" value="o" />
          </Picker>
          <View>
            <Text style={styles.add_item_text}>Select Sub Category</Text>
            {changeSubCat()}
          </View>
          <Text style={styles.add_item_text}>Quantity:</Text>
          <TextInput
            keyboardType="numeric"
            value={formDetails.itemQuantity}
            onChangeText={(text) => formDetails.setItemQuantity(text)}
            style={styles.add_item_textinput}
            placeholder="Quantity in stock"
          />
          <Text style={styles.add_item_text}>Price of Item</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(text)=>formDetails.setItemPrice(text)}
            style={styles.add_item_textinput}
            placeholder="Price of Item"
          />
        </View>
        <TouchableOpacity
              onPress={onSubmit}
              style={styles.modalButton}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Add Item
              </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modalize>
  );
};

export default AddItemModal;

const styles = StyleSheet.create({
  modalButton: {
    backgroundColor: "#2196f3",
    borderRadius: 7,
    height: 50,
    marginTop: 10,    
    justifyContent: "center",
  },
  add_item_textinput: {
    backgroundColor: "#e6e1e1",
    height: 40,
    borderRadius: 5,
    padding: 5,
  },

  add_item_text: {
    fontWeight: "bold",
    height: 30,
    justifyContent: "center",
    marginTop: 10,
  },
  cat_picker: {
    backgroundColor: "#e6e1e1",
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
    width: "100%",
  },
  pickerItemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    width: "100%"
  }
});
