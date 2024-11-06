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
        
        if (result.ok) {
            delete formData.store_photo
            delete formData.password
            formData.id = result.body["id"]
            const token = await saveToken(JSON.stringify(formData));
            if (token === true) {
                const response = await result.json()
                return response
            }
        } else {            
            return "Try again"
        }
        

    } catch (err) {
        console.error(err);
    }
}

export default SubmitSellerDetails