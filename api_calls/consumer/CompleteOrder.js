import Link from "../serverLink"
const restockItem = async (data, token) => {
    try {
        const response = await fetch(`${Link()}/consumer/place_order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": token,
            },
            body: JSON.stringify(data)
        })
        const resp = response.json()
        if (response.ok) {
            return resp
        }
    } catch (err) {
        console.error(err)
    }
}

export default restockItem