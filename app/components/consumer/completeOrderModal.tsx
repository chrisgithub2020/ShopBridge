import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView} from "react-native";
import {Modalize} from "react-native-modalize"
import React, {useRef} from "react"

interface modalProp {
    order: () => void;
    refObject: React.RefObject<Modalize>;
}

const CompleteOrderModal = ({order,  refObject}: modalProp) => {
    const modalRef = useRef<Modalize>(null);

    
    return (
        <Modalize modalStyle={{zIndex: 1000}} overlayStyle={{zIndex: 999}} adjustToContentHeight={true} ref={refObject}>
            <KeyboardAvoidingView style={{padding: 8, marginBottom: 60,}}> 
                    
                <TouchableOpacity style={styles.modalButton}>
                    <Text style={{alignSelf:"center", fontWeight:"bold", color: "white"}}>Complete Order</Text>
                </TouchableOpacity>       
            </KeyboardAvoidingView>
        </Modalize>
    )
}

export default CompleteOrderModal

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