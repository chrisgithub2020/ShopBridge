import Link from "../serverLink"
const takeItemDown = async (itemID) => {
    try {
        const response = await fetch(`${Link()}/take_down/${itemID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        console.log(response)
    } catch (err) {
        console.error(err)
    }
}

export default takeItemDown