import Link from "../serverLink"
const restockItem = async (data, a_token) => {
    try {
        const response = await fetch(`${Link()}/seller/restock_item`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token,
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}

export default restockItem