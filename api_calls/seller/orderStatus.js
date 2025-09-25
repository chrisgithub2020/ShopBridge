import Link from "../serverLink";

const checkOrderStatus = async (order_id, a_token) => {
    try {
        const result = await fetch(`${Link()}/seller/order_status/${order_id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "access-token": a_token,
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