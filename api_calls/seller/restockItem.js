const restockItemData = async (data) => {
    try {
        const response = await fetch("https://dbff-154-161-4-57.ngrok-free.app/restock_item", {
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

export default restockItemData