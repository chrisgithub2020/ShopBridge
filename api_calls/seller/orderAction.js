import Link from "../serverLink"

const orderState = async (data, a_token) => {
    try {
        const response = await fetch(`${Link()}/order_actions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token,
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

export default orderState