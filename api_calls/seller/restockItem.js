import Link from "../serverLink"
const restockItem = async (data) => {
    try {
        const response = await fetch(`${Link()}/restock_item`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log(response)
    } catch (err) {
        console.error(err)
    }
}

export default restockItem