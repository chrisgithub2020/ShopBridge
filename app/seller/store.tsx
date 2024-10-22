import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


interface StoreProduct {
  id: string;
  name: string;
  quantity: string;
  price: string;
}

interface StoreProductProp {
  product: StoreProduct
}

const Products: StoreProduct[] = [
  {id: "1", name: "Gold Watch", price: "500", quantity:"23"},
  {id: "2", name: "Gold Watch", price: "500", quantity:"23"},
  {id: "3", name: "Gold Watch", price: "500", quantity:"23"},
  {id: "4", name: "Gold Watch", price: "500", quantity:"23"},
  {id: "5", name: "Gold Watch", price: "500", quantity:"23"},
  {id: "6", name: "Gold Watch", price: "500", quantity:"23"},
  {id: "7", name: "Gold Watch", price: "500", quantity:"23"},
]

const ProductComponent: React.FC<StoreProductProp> = ({ product})=> {
  return (
    <View style={styles.supplies_container}>
          <View style={{flexDirection:"row"}}>
            <View>
              <Image style={styles.image} source={require('../../resources/file.png')}/>
            </View>
            <View style={styles.abt_container}>
              <Text style={{height:"40%", marginTop:10,}}>{product.name}</Text>
              <Text style={{height:"17%"}}>{product.price}</Text>
              <Text style={{height:"17%"}}>{product.quantity}</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", justifyContent: "space-around"}}>
            <TouchableOpacity style={styles.supplies_button}>
              <Text style={styles.supplies_button_test}>Take Down</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.supplies_button}>
              <Text style={styles.supplies_button_test}>Restock</Text>
            </TouchableOpacity>
          </View>
        </View>
  )
}
const store = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={Products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductComponent product={item} />}
      />
    </SafeAreaView>  
  )
}

export default store


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e1e1",
    flex:1,
    padding: 8,
  }, 
  supplies_container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding:7,
    height:200,
    marginTop:6,
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
    width:"45%",
    height:35,
    borderRadius: 5,
  },
  supplies_button_test:{
    padding:8,
    justifyContent: "center",
    alignSelf: "center",
  }
})