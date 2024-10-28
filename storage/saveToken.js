import * as SecureStore from "expo-secure-store" 

const saveToken = async (value) => {
    try {
        console.log("saving")
        await SecureStore.setItemAsync("acc",value);
        return true;
    } catch (err) {
        console.error(err);
    }
}

export default saveToken;