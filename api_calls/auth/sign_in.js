import saveToken from "../../storage/saveToken"
import Link from "../serverLink"


const SubmitSignINDetails = async (formData) => {
    try {
        const result = await fetch(`${Link()}/signIN`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        
        const resp = await result.json()
        if (resp["success"] === true) {
            const token = await saveToken(JSON.stringify(resp["data"]));
            if (token === true) {
                return resp
            }
        } else {            
            return "Try again"
        }
        

    } catch (err) {
        return "!issue"
    }
}

export default SubmitSignINDetails