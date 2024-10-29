import {Modal, View, Text, TouchableOpacity, StyleSheet} from "react-native";

interface modalProp {
    onRestock: () => void;
    visible: boolean;
    onClose: () => void;
}

const RestockModal: React.FC<modalProp> = ({onRestock, visible, onClose}) => {
    return (
        <Modal visible={visible} onRequestClose={onClose} animationType="slide">
            <View style={styles.container}>

            </View>
        </Modal>
    )
}

export default RestockModal

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 7,
    }
})