import Link from "../serverLink"

const sendData = async (data) => {
    try {
        const response = await fetch(`${Link()}/add_item_to_store`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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