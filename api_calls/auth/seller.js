import saveToken from "../../storage/saveToken"


const SubmitSellerDetails = async (formData) => {
    const token = await saveToken(formData)
    try {
        const result = await fetch("https://a9f9-154-161-188-153.ngrok-free.app/sign_up_seller",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
    
        if (!result.ok) {
            return "Try again"
        }
    
        if (token === true) {
            const response = await result.json()
            return response
        }

    } catch (err) {
        console.error(err);
    }
}

export default SubmitSellerDetails