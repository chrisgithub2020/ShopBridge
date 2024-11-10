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
            formData.id = resp["id"]
            const token = await saveToken(JSON.stringify(formData));
            if (token === true) {
                return resp["success"]
            }
        } else {            
            return "Try again"
        }
        

    } catch (err) {
        console.error(err);
    }
}

export default SubmitSellerDetails