import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView} from "react-native";
import {Modalize} from "react-native-modalize"
import React, {useRef} from "react"

interface modalProp {
    addToCart: () => void;
    refObject: React.RefObject<Modalize>;
}

const ProductDetailsModal = ({addToCart,  refObject}: modalProp) => {
    const modalRef = useRef<Modalize>(null);

    
    return (
        <Modalize modalStyle={{zIndex: 1000}} overlayStyle={{zIndex: 999}} adjustToContentHeight={true} ref={refObject}>
            <KeyboardAvoidingView style={{padding: 8, marginBottom: 60,}}>
                <View style={{flex:1, padding:5,}}>                    
                    <View style={styles.product_images_container}>
                        <TouchableOpacity style={styles.change_image_button}>
                        <MaterialIcons name="arrow-back" size={25}/>
                        </TouchableOpacity>
                        <Image source={require("../../../resources/file.png")} style={styles.product_images}/>
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
                </View>
                <TouchableOpacity style={styles.modalButton}>
                    <Text style={{alignSelf:"center", fontWeight:"bold", color: "white"}}>Add to Cart</Text>
                </TouchableOpacity>       
            </KeyboardAvoidingView>
        </Modalize>
    )
}

export default ProductDetailsModal

const styles = StyleSheet.create({
    modalButton: {
        backgroundColor: "#2196f3",
        borderRadius: 7,
        height: 50,
        justifyContent: "center"
    },
    product_images_container: {
      flexDirection: "row",
      padding:5,
      backgroundColor: "white",
    },
    product_images: {
      height: 300,
      width: "85%",
    },
    change_image_button: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    product_details: {
      borderTopWidth: 2,
      borderTopColor: "#e6e1e1",
      backgroundColor: "white",
      padding:3,
    }
})