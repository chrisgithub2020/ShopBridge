import Link from "../serverLink"


const getCartContent = async (urls, token) => {
  try {
    const response = await fetch(`${Link()}/consumer/get_cart_content/${urls}`, {
      method: "GET",
      headers: {
        "access-token":token,
      }
    })
    if (response.ok) {
      const result = await response.json()
      if (response.ok){
        if (result["success"] === true){
          return result["data"]
        }
      }
    }
  } catch (err) {
    console.log(err)
  }
};

export default getCartContent;