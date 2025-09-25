import Link from "../serverLink"
import saveToken from "@/storage/saveToken"

const takeItemDown = async (itemID, storeName, a_token, r_token) => {
    try {
        const response = await fetch(`${Link()}/seller/take_down`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token,
                "refresh-token": r_token,
            },
            body: JSON.stringify({"itemId":itemID, "storeName": storeName})
        })
        const result = await response.json()
        if (response.ok){
            if ("refresh" in result){
                saveToken(result["a_token"], result["r_token"])
            }
            return result
        } else {
            return null
        }
    } catch (err) {
        console.error(err)
        return false
    }
}

export default takeItemDown