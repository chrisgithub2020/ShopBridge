import Link from "../serverLink"
const takeItemDown = async (itemID, storeName, a_token) => {
    try {
        const response = await fetch(`${Link()}/seller/take_down`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token
            },
            body: JSON.stringify({"itemId":itemID, "storeName": storeName})
        })
        if (response.ok){
            return await response.json()
        }
    } catch (err) {
        console.error(err)
        return false
    }
}

export default takeItemDown