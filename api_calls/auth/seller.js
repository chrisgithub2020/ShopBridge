import saveToken from "../../storage/saveToken"
import Link from "../serverLink"


const SubmitSellerDetails = async (formData) => {
    try {
        const result = await fetch(`${Link()}/sign_up_seller`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        
        const resp = await result.json()
        if (resp["success"] === true) {
            delete formData.password
            delete formData.store_photo
            formData.id = resp["id"]
            const token = await saveToken(JSON.stringify(formData));
            if (token === true) {
                if (resp["success"]){
                    return resp["id"]
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