import Link from "../serverLink";

const getStoreOrders = async (a_token) => {
    try {
        const result = await fetch(`${Link()}/seller/store_orders`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token
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