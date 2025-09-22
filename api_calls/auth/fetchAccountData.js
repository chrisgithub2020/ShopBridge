import Link from "../serverLink"

const fetchData = async (a_token) => {
    try {
        const result = await fetch(`${Link()}/loading`, {
            method: "GET",
            headers: {
                "access-token": a_token,
            }
        })
        if (result.status == 200) {
            const response = await result.json()
            console.log(response)
            return response
        } else if (result.status == 401){
            console.log("refresh")
        } else {
            console.log("login")
        }
        
    } catch (err) {
        console.log(err)
        return false
    }
}

export default fetchData