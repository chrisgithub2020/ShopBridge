import Link from "../serverLink"


const getCartContent = async (urls) => {
  try {
    const response = await fetch(`${Link()}/get_cart_content/${urls}`)
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