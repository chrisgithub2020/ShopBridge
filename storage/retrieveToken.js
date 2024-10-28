import * as SecureStore from "expo-secure-store";


const retreiveToken = async (key) => {
    try {
        const token = await SecureStore.getItemAsync(key)
        return token;
    } catch (err) {
        console.error(err);
    }

}

export default retreiveToken;