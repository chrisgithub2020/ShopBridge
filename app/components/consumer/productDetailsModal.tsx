import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ActivityIndicator} from "react-native";
import {Modalize} from "react-native-modalize"
import React, {useEffect, useRef, useState} from "react"
import getItemImages from "../../../api_calls/consumer/fetchImages"
import { ScrollView } from "react-native-gesture-handler";

interface itemDetail {
    name: string;
    price: string;
    description: string;
    photos: Array<string>;
}

interface modalProp {
    addToCart: () => void;
    refObject: React.RefObject<Modalize>;
    product: itemDetail;
    onClose: () => void;
    imageId: any
}



const ProductDetailsModal = ({addToCart,  refObject, product, onClose, imageId}: modalProp) => {
    const [photos, setPhotos] = useState<Array<string>>();
    const [imageLoading, setImageLoading] = useState<boolean>(true)

    useEffect(()=>{
        if (imageId) {
            // this gets the images asynchronously without delaying main process
            getItemImages(imageId).then((images)=>{
                console.log(images.length)
                setPhotos(images)
                setImageLoading(false)
            })
        }
    }, [imageId])


    const displayImages = ()=>{        
        return (
            <ScrollView style={{flex: 1, backgroundColor: "black", height: 300, width: "auto"}} horizontal={true} pagingEnabled={true}>{photos?.map((val, ind)=>{
            return <Image key={ind} source={{uri:`data:image/png;base64,${val}`}} style={styles.product_images}/>
        })}</ScrollView>
        )
    }

    
    return (
        <Modalize onClose={onClose} modalStyle={{zIndex: 1000}} overlayStyle={{zIndex: 999}} adjustToContentHeight={true} ref={refObject}>
            <KeyboardAvoidingView style={{padding: 8}}>
                <View style={{flex:1}}>                    
                    <View style={styles.product_images_container}>                        
                        {imageLoading ? <ActivityIndicator style={{ flex: 1}} size="large" color="black" />:displayImages()}
                    </View>
                    <View style={styles.product_details}>
                        <Text adjustsFontSizeToFit style={{elevation: 4, padding:5, fontWeight:"bold", fontSize:18}}>{product.name}</Text>
                        <Text style={{height: 40,fontWeight:"bold", padding:5,fontSize:15, borderTopWidth: 1,borderBottomWidth:1, borderTopColor: "#e6e1e1", borderBottomColor: "#e6e1e1"}}>GH₵ {product.price}</Text>
                        <Text adjustsFontSizeToFit style={{padding:3, fontSize: 16}}>{product.description}</Text>              
                    </View>
                </View>
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
      alignItems: "center",
      justifyContent: "center",
      height: 300
    },
    product_images: {
      flex: 1,
      height: 300,
      width: 300,
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
      margin: 5,
    }
})