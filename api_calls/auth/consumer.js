import saveToken from "../../storage/saveToken"
import Link from "../serverLink"

const SubmitConsumerDetails = async (formData) => {
    try {
        const result = await fetch(`${Link()}/sign_up_consumer`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(formData),
    
        })

        const resp = await result.json()
        if (resp["success"] === true) {
            delete formData.password
            formData.id = resp["id"]
            const token = await saveToken(JSON.stringify(formData));
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