import Link from "../serverLink"

const getItemImage = async (image_id) => {
  try {
    const response = await fetch(`${Link()}/get_image/${image_id}`);
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

export default getItemImage;