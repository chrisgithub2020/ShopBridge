import Link from "../serverLink"
import saveToken from "@/storage/saveToken"
const restockItem = async (data, a_token, r_token) => {
    try {
        const response = await fetch(`${Link()}/consumer/place_order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token,
                "refresh": r_token
            },
            body: JSON.stringify(data)
        })
        const resp = response.json()
        if (response.ok) {
            if ("refresh" in resp){
                saveToken(resp["a_token"], resp["r_token"])
            }
            return resp
        } else {
            return null
        }
    } catch (err) {
        console.error(err)
    }
}

export default restockItem