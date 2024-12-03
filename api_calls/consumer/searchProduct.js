import Link from "../serverLink"

const searchProductInDB = async (text) => {
  try {
    const response = await fetch(`${Link()}/searchProduct/${text}`);
    if (response.ok) {
      const result = await response.json();

      if (result["success"] === true){
        return result["data"]
      }
    }
  } catch (err) {
    console.log(err)
  }
};

export default searchProductInDB;