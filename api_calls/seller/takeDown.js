import Link from "../serverLink"
const takeItemDown = async (data) => {
    try {
        const response = await fetch(`${Link()}/take_down`, {
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

export default takeItemDown