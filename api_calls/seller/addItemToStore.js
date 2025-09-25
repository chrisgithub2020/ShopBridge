import saveToken from "@/storage/saveToken";
import Link from "../serverLink"

const sendData = async (data, a_token, r_token) => {
    try {
        console.log("Sending item details")
        const response = await fetch(`${Link()}/seller/add_item_to_store`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token,
                "refresh-token": r_token,
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        if (response.ok){
            if (result["success"] === true){
                if ("refresh" in result){
                    saveToken(result["a_token"], result["r_token"])
                }
                return result
            }
        } else {
            return null
        }
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

export default sendData