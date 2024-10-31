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
import React, {useState, useRef} from "react";
import {SafeAreaView} from "react-native-safe-area-context"
import { MaterialIcons } from "@expo/vector-icons"
import getHomepageProducts from "../../api_calls/consumer/getHompageProducts"
import { Modalize } from "react-native-modalize";
import ProductComponent from "../components/consumer/homePage"
import ProductDetailsModal from "../components/consumer/productDetailsModal"

interface ProductData {
  id: string;
  name: string;
  price: string;
  store_name: string;
}

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


const getProducts = async () => {
  const products = await getHomepageProducts()
  console.log(products);
}




const ConsumerHome = () => {

  
  
  const screenWidth = Dimensions.get("window").width;
  const numColumns = Math.floor(screenWidth / 170);
  const [currentView, setCurrentView] = useState<string>("products");
  const modalRef = useRef<Modalize>(null)
  
  const openModal = () => {
    modalRef.current?.open()
  }

  const closeModal = () => {
    modalRef.current?.close()
  }
  
  // getProducts();

  return (
    <SafeAreaView style={styles.container}>
      <View>
          <View style={styles.searchbar}>
            <TextInput style={{backgroundColor: "#e6e1e1", height: "100%",width: "100%", borderRadius: 5, padding: 10, marginRight:5,}} placeholder="Search here"/>
          </View>
          <ProductDetailsModal refObject={modalRef} addToCart={() => console.log("adding to cart")}/>
          <FlatList style={styles.flatContainer}
            data={Products}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            renderItem={({ item }) => <ProductComponent product={item} onClick={openModal} />}
        />
          </View>      
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
  button: {
    backgroundColor: "#2196f3",
    borderRadius: 5,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  searchbar: {
    height:60,
    backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
  }, 
  flatContainer: {
    padding:8,
  },
});
