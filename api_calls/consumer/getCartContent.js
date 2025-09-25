import Link from "../serverLink"
import saveToken from "@/storage/saveToken"

const getCartContent = async (urls, a_token, r_token) => {
  try {
    const response = await fetch(`${Link()}/consumer/get_cart_content/${urls}`, {
      method: "GET",
      headers: {
        "access-token":a_token,
        "refresh-token": r_token,
      }
    })
    if (response.ok) {
      const result = await response.json()
      if (response.ok){
        if (result["success"] === true){
          if ("refresh" in result){
            saveToken(result["a_token"], result["r_token"])
          }
          return result
        }
      } else {
        return null
      }
    }
  } catch (err) {
    console.log(err)
  }
};

export default getCartContent;