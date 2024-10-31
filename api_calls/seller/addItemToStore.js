const sendData = async (data) => {
    try {
        const response = await fetch("https://dbff-154-161-4-57.ngrok-free.app/add_item_to_store", {
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

export default sendData