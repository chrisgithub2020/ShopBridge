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
        console.log(resp)
        if (resp["success"] === true) {
            const token = await saveToken(JSON.stringify(resp["data"]));
            if (token === true) {
                return resp["data"]
            }
        } else {            
            return "Try again"
        }
        

    } catch (err) {
        console.error(err);
    }
}

export default SubmitSignINDetails