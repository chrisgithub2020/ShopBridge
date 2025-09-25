import Link from "../serverLink";
import saveToken from "@/storage/saveToken"
const getStoreItems = async (a_token, r_token) => {
    try {
        const result = await fetch(`${Link()}/seller/store_items`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token,
                "refresh-token": r_token,
            },
        })
        
        const response = await result.json()
        if (result.ok) {
            if (response["success"] === true){
                if ("refresh" in response){
                    saveToken(response["a_token"], response["r_token"])
                }
                return response;
            }
        } else {
            return null
        }
    } catch (err) {
        console.log(err)
    }
}

export default getStoreItems