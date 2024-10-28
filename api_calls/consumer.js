import saveToken from "../storage/saveToken"

const SubmitConsumerDetails = async (formData) => {
    const saving_resp = await saveToken(JSON.stringify(formData));
    try {
        const result = await fetch("https://a9f9-154-161-188-153.ngrok-free.app/sign_up_consumer",{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(formData),
    
        })

        if (!result.ok) {
            return "Try again"
        }
        if (saving_resp === true) {
            const response = await result.json()
            return response
        }

    } catch (err) {
        console.log(err);
    }

    


}

export default SubmitConsumerDetails