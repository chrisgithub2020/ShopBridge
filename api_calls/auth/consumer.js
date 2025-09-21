import saveToken from "../../storage/saveToken"
import Link from "../serverLink"

const SubmitConsumerDetails = async (formData) => {
    try {
        const result = await fetch(`${Link()}/auth/consumer`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(formData),
    
        })

        const resp = await result.json()
        if (resp["success"] === true) {
            const token = await saveToken(resp["a_token"], resp["r_token"]);
            if (token === true) {
                return resp["success"]
            }
        } else {            
            return false
        }

    } catch (err) {
        return "!issue"
    }

    


}

export default SubmitConsumerDetails