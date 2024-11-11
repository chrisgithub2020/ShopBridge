import Link from "../serverLink"

const getProductDetails = async (ProductID) => {
  try {
    const response = await fetch(`${Link()}/getProductDetails/${ProductID}`);
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

export default getProductDetails;