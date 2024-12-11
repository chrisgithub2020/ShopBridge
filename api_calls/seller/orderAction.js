import Link from "../serverLink"

const orderAction = async (data) => {
    try {
        const response = await fetch(`${Link()}/order_actions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        if (response.ok){
            return result["data"]
        }
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

export default orderAction