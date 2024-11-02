const restockItem = async (data) => {
    try {
        const response = await fetch("https://0d1e-102-176-127-150.ngrok-free.app/restock_item", {
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