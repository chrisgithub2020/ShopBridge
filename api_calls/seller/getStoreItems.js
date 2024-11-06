import Link from "../serverLink";

const getStoreItems = async (storeId) => {
    try {
        const result = await fetch(`${Link()}/store_items/${storeId}`,{
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

export default getStoreItems