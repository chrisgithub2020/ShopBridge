import Link from "../serverLink"
import saveToken from "@/storage/saveToken"
const fetchData = async (a_token, r_token) => {
    try {
        const result = await fetch(`${Link()}/loading`, {
            method: "GET",
            headers: {
                "access-token": a_token,
                "refresh-token": r_token
            }
        })
        if (result.ok) {
            const response = await result.json()
            if ("refresh" in result){
                saveToken(result["a_token"], result["r_token"])
            }
            return response
        } else {
            console.log("login")
            return null
        }
        
    } catch (err) {
        console.log(err)
        return false
    }
}

export default fetchData