import Link from "../serverLink"

const sendData = async (data, a_token) => {
    try {
        console.log("Sending item details")
        const response = await fetch(`${Link()}/seller/add_item_to_store`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token,
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        if (response.ok){
            if (result["success"] === true){
                return result["data"]
            }
        }
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

export default sendData