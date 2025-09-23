import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ActivityIndicator} from "react-native";
import {Modalize} from "react-native-modalize"
import React, {useEffect, useRef, useState} from "react"
import getItemImages from "../../../api_calls/consumer/fetchImages"

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
    let currentImageIndex = 0
    const modalRef = useRef<Modalize>(null);
    const [currentPhoto, setCurrentPhoto] = useState<string>();
    const [imageLoading, setImageLoading] = useState<boolean>(true)

    useEffect(()=>{
        if (imageId) {
            // this gets the images asynchronously without delaying main process
            getItemImages(imageId).then((images)=>{
                console.log(images.length)
                product.photos = images
                setImageLoading(false)
            })
        }
    }, [imageId])


    const switchProductPhotoForward = () => {
        if (currentImageIndex === product.photos.length -1) {
            console.log("Reached Limit")
        } else {
            currentImageIndex ++;
        }
        setCurrentPhoto(product.photos[currentImageIndex])
    }

    const switchProductPhotoBackward = () => {
        if (currentImageIndex === product.photos.length -1) {
            console.log("Reached Limit")
        } else {
            currentImageIndex --;
        }
        setCurrentPhoto(product.photos[currentImageIndex])
    }

    
    return (
        <Modalize onClose={onClose} modalStyle={{zIndex: 1000}} overlayStyle={{zIndex: 999}} adjustToContentHeight={true} ref={refObject}>
            <KeyboardAvoidingView style={{padding: 8}}>
                <View style={{flex:1, padding:5,}}>                    
                    <View style={styles.product_images_container}>
                        <TouchableOpacity disabled={imageLoading} onPress={switchProductPhotoBackward} style={styles.change_image_button}>
                            <MaterialIcons name="arrow-back" size={25}/>
                        </TouchableOpacity>
                        <Image source={(currentImageIndex === 0 ) ? {uri:`data:image/png;base64,${product.photos[0]}`}: {uri:`data:image/png;base64,${currentPhoto}`}} style={styles.product_images}/>
                        <TouchableOpacity disabled={imageLoading} onPress={switchProductPhotoForward} style={styles.change_image_button}>
                            <MaterialIcons name="arrow-forward" size={25}/>
                        </TouchableOpacity>
                        {imageLoading && <ActivityIndicator style={{ flex: 1, position: "absolute", top: "40%", left: "40%" }} size="small" color="black" />}
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