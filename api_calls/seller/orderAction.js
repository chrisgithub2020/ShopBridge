import Link from "../serverLink"
import saveToken from "@/storage/saveToken"
const orderState = async (data, a_token, r_token) => {
    try {
        const response = await fetch(`${Link()}/order_actions`, {
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
            if ("refresh" in result){
                saveToken(result["a_token"], result["r_token"])
            }
            return result
        } else {
            return null
        }
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

export default orderState