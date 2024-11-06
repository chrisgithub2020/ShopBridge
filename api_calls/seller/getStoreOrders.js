import Link from "../serverLink";

const getStoreOrders = async (storeId) => {
    try {
        const result = await fetch(`${Link()}/store_orders/${storeId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (result.ok) {
            return result;
        }
    } catch (err) {
        console.log(err)
    }
}

export default getStoreOrders