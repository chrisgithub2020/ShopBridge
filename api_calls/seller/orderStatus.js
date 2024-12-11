import Link from "../serverLink";

const checkOrderStatus = async (storeId) => {
    try {
        const result = await fetch(`${Link()}/order_status/${storeId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        
        const response = await result.json()
        if (result.ok) {
            if (response["success"]){
                return response["success"];
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export default checkOrderStatus