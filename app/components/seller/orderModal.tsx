import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView} from "react-native";
import {Modalize} from "react-native-modalize"
import React, {useRef} from "react"

interface modalProp {
    cancelOrder: () => void;
    refObject: React.RefObject<Modalize>;
    dispatchOrder: () => void;
}

const OrderActionsMOdal = ({cancelOrder,  refObject, dispatchOrder}: modalProp) => {

    
    return (
        <Modalize modalStyle={{zIndex: 1000}} overlayStyle={{zIndex: 999}} adjustToContentHeight={true} ref={refObject}>
            <KeyboardAvoidingView style={{padding: 3,}}>
                <Text style={styles.modalHeader}>Order Actions</Text>
                <Text style={{color: "red",alignSelf:"center", marginBottom: 5}}>*Recipient will be notified of every action you take</Text>
                <View style={{flexDirection: "row", flex: 1, justifyContent:"space-around", padding: 3}}>
                    <TouchableOpacity onPress={cancelOrder} style={styles.modalButton}>
                        <Text style={{justifyContent: 'center', alignSelf:"center", fontWeight: "bold"}}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={dispatchOrder} style={styles.modalButton}>
                        <Text style={{justifyContent: 'center', alignSelf:"center", fontWeight: "bold"}}>Dispatch</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        </Modalize>
    )
}

export default OrderActionsMOdal

const styles = StyleSheet.create({
    modalButton: {
        backgroundColor: "#2196f3",
        borderRadius: 7,
        height: 50,
        justifyContent: "center",
        flex: 1,
        margin: 2,
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