import Link from "../serverLink"
const getCategoryProducts = async (mainCat, subCat) => {
  try {
    const response = await fetch(`${Link()}/consumer/category/${mainCat}/${subCat.toString()}`)
    if (response.ok){
      const data = await response.json()
      if (data["success"]) {
        return data["data"]
      }
    }

  } catch (err) {
    console.log(err)
  }
};

export default getCategoryProducts