import * as SecureStore from "expo-secure-store" 

const saveCartToken = async (value) => {
    try {
        value = value.toString();
        console.log("saving")
        await SecureStore.setItemAsync("cart",value);
        return true;
    } catch (err) {
        console.error(err);
    }
}

export default saveCartToken;