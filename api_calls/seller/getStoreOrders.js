import Link from "../serverLink";

const getStoreOrders = async (storeId) => {
    try {
        const result = await fetch(`${Link()}/store_orders/${storeId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        
        const response = await result.json()
        if (result.ok) {
            if (response["success"] === true){
                return response["data"]
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export default getStoreOrders