import Link from "../serverLink"
const restockItem = async (data) => {
    try {
        const response = await fetch(`${Link()}/complete_order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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