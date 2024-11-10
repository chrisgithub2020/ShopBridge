import Link from "../serverLink";

const getStoreItems = async (storeId) => {
    try {
        const result = await fetch(`${Link()}/store_items/${storeId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        
        const response = await result.json()
        if (result.ok) {
            if (response["success"] === true){
                console.log(response["data"])
                return response["data"];
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export default getStoreItems