import saveToken from "../../storage/saveToken"
import Link from "../serverLink"


const SubmitSellerDetails = async (formData) => {
    try {
        const result = await fetch(`${Link()}/auth/seller`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        
        const resp = await result.json()
        if (resp["success"] === true) {
            const token = await saveToken(resp["a_token"], resp["r_token"]);
            if (token === true) {
                if (resp["success"]){
                    return ""
                }
            }
        } else {            
            return false
        }
        

    } catch (err) {
        return "!issue"
    }
}

export default SubmitSellerDetails