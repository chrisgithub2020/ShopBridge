import * as SecureStore from "expo-secure-store" 

const saveToken = async (a_token, r_token) => {
    try {
        console.log("saving")
        await SecureStore.setItemAsync("a_token",a_token);
        await SecureStore.setItemAsync("r_token",r_token);
        return true;
    } catch (err) {
        console.error(err);
    }
}

export default saveToken;