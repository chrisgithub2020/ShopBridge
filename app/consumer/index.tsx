import {
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context"
import { MaterialIcons } from "@expo/vector-icons";
import getHomepageProducts from "../../api_calls/getHompageProducts"
import { router } from "expo-router";

const Products: ProductData[] = [
  { id: "1", store_name:"J.K. Electronics", name: "watch", price: "23" },
  { id: "2", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "3", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "v", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "d", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "i", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "w", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "p", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "q", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "g", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "r", store_name:"J.K. Electronics", name: "watch", price: "100" },
  { id: "4", store_name:"J.K. Electronics", name: "watch", price: "100" },
];

interface ProductData {
  id: string;
  name: string;
  price: string;
  store_name: string;
}

interface ComponentProp {
  product: ProductData;
}

const getProducts = async () => {
  const products = await getHomepageProducts()
  console.log(products);
}




const ConsumerHome = () => {

  
  
  const screenWidth = Dimensions.get("window").width;
  const numColumns = Math.floor(screenWidth / 170);
  const [currentView, setCurrentView] = useState<string>("products");
  const ProductComponent: React.FC<ComponentProp> = ({ product }) => {
    return (
      <TouchableOpacity style={styles.product_container} onPress={() => setCurrentView("details")}>
        <View style={styles.product_image_container}>
          <Image
            style={styles.product_image}
            source={require("../../resources/file.png")}
          />
        </View>
        <View style={styles.product_desc_container}>
          <Text style={styles.store_name}>{product.store_name}</Text>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.text_price}>{product.name}</Text>
          <Text style={styles.text_price}>GH₵{product.price}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignSelf: "center",
                paddingBottom: 2,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </Text>
            <MaterialIcons
              style={{ color: "white", fontWeight: "bold", marginLeft: 5 }}
              name="shopping-cart"
              size={20}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  getProducts();

  const switchView = () =>{
    switch (currentView) {
      case "details":
        return (
          <View style={{flex:1, padding:5,}}>
            <View style={{flexDirection:"row", width: "100%", height: 55, justifyContent:"space-between", backgroundColor:"white", padding: 5}}>
              <TouchableOpacity onPress={() => setCurrentView("products")} style={{width: "15%", marginLeft:10,justifyContent: "center", alignItems: "center"}}>
                <MaterialIcons style={{}} size={25} name="arrow-back"/>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: "#2196f3",width:"60%", borderRadius:5,}}>
                <Text style={{justifyContent: "center", alignSelf:"center", paddingTop: 13, fontWeight:"bold", color: "white"}}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{marginTop:2,}}>
              <View style={styles.product_images_container}>
                <TouchableOpacity style={styles.change_image_button}>
                  <MaterialIcons name="arrow-back" size={25}/>
                </TouchableOpacity>
                <Image source={require("../../resources/file.png")} style={styles.product_images}/>
                <TouchableOpacity style={styles.change_image_button}>
                  <MaterialIcons name="arrow-forward" size={25}/>
                </TouchableOpacity>
              </View>
              <View style={styles.product_details}>
                <Text style={{height: 100, padding:5,}}>ghhhhedcugd</Text>
                <Text style={{height: 40, padding:5, borderTopWidth: 1,borderBottomWidth:1, borderTopColor: "#e6e1e1", borderBottomColor: "#e6e1e1"}}> Price</Text>
                <View style={{height: "100%"}}>
                  <Text style={{padding:3, fontWeight: "bold"}}>Description</Text>
                  <Text ></Text>
                </View>
                <Text></Text>
              </View>
            </ScrollView>            
          </View>
          
        )
  
      case "products":
        return (
          <View>
            <View style={styles.searchbar}>
          <TextInput style={{backgroundColor: "#e6e1e1", height: "100%",width: "100%", borderRadius: 5, padding: 10, marginRight:5,}} placeholder="Search here"/>
          </View>
          <FlatList style={styles.flatContainer}
            data={Products}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            renderItem={({ item }) => <ProductComponent product={item} />}
        />
          </View>
        )
    }
  }

  

  return (
    <SafeAreaView style={styles.container}>
      {switchView()}      
    </SafeAreaView>
  );
};

export default ConsumerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#e6e1e1",
  },
  product_container: {
    borderRadius: 7,
    padding: 5,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: 170,
  },
  product_image_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  product_image: {
    width: 150,
    height: 130,
  },
  product_details: {
    borderTopWidth: 2,
    borderTopColor: "#e6e1e1",
    backgroundColor: "white",
    padding:3,
  },
  product_desc_container: {
    padding: 3,
  },
  change_image_button: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  product_images: {
    height: 300,
    width: "85%",
  },
  store_name: {
    backgroundColor: "#2196f3",
    borderRadius: 4,
    paddingLeft: 5,
    paddingBottom: 2,
    marginBottom: 3,
    marginTop: 3,
    width: 120,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "#2196f3",
    borderRadius: 5,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text_price: {
    color: "white",
    fontWeight: "bold",
  },searchbar: {
    height:60,
    backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
  }, 
  flatContainer: {
    padding:8,
  },
  product_images_container: {
    flexDirection: "row",
    padding:5,
    backgroundColor: "white",
  }
});
