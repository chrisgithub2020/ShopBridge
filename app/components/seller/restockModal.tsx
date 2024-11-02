import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView} from "react-native";
import {Modalize} from "react-native-modalize"
import React, {useRef} from "react"

interface modalProp {
    restock: () => void;
    refObject: React.RefObject<Modalize>;
    setAmountToRestock: (text: String) => void;
}

const RestockModal = ({restock,  refObject, setAmountToRestock}: modalProp) => {

    
    return (
        <Modalize modalStyle={{zIndex: 1000}} overlayStyle={{zIndex: 999}} adjustToContentHeight={true} ref={refObject}>
            <KeyboardAvoidingView style={{padding: 8, marginBottom: 60,}}>
                <Text style={styles.modalHeader}>Restock</Text>
                <Text style={{padding:7, fontWeight: "condensedBold"}}>Enter quantity to restock:</Text>
                <TextInput onChangeText={setAmountToRestock} keyboardType="numeric" style={styles.modalInput} placeholder="Quantity"/>
                <TouchableOpacity onPress={restock} style={styles.modalButton}>
                    <Text style={{justifyContent: 'center', alignSelf:"center", fontWeight: "bold"}}>Restock</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </Modalize>
    )
}

export default RestockModal

const styles = StyleSheet.create({
    modalButton: {
        backgroundColor: "#2196f3",
        borderRadius: 7,
        height: 50,
        justifyContent: "center"
    },
    modalHeader: {
        fontWeight: "condensedBold",
        fontSize: 25,
        alignSelf: "center"
    },
    modalBody: {
        padding: 8,
    },
    modalInput: {
        padding: 5,
        backgroundColor: "#e6e1e1",
        height:45,
        marginBottom: 5,
        borderRadius:8,
    },
})