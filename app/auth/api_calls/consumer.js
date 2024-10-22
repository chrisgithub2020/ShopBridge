const SubmitConsumerDetails = async (formData) => {
    const result = await fetch("http://localhost:80",{
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            contentType: "application/json"
        }
    })

    if (!result.ok) {
        return "Try again"
    }

    const response = await result.json()
    return response
}