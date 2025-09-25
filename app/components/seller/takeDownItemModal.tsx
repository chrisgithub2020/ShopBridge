import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView} from "react-native";
import {Modalize} from "react-native-modalize"
import React, {useRef} from "react"

interface modalProp {
    takeDown: () => void;
    refObject: React.RefObject<Modalize>;
    setStoreName: (text: string) => void;
    loading: boolean;
}

const TakeDownItemModal = ({takeDown,  refObject, setStoreName, loading}: modalProp) => {

    
    return (
        <Modalize modalStyle={{zIndex: 1000}} overlayStyle={{zIndex: 999}} adjustToContentHeight={true} ref={refObject}>
            <KeyboardAvoidingView style={{padding: 8,}}>
                <Text style={styles.modalHeader}>Take Down</Text>
                <Text style={{padding:7, fontWeight: "condensedBold"}}>Enter Store name to confirm take down:</Text>
                <TextInput onChangeText={setStoreName} style={styles.modalInput} placeholder="Store name"/>
                <TouchableOpacity onPress={takeDown} style={styles.modalButton}>
                    {loading ? <ActivityIndicator style={{ flex: 1 }} size="small" color="black" />:<Text style={{justifyContent: 'center', alignSelf:"center", fontWeight: "bold"}}>Confirm</Text>}
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </Modalize>
    )
}

export default TakeDownItemModal

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