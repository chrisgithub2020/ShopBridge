import Link from "../serverLink"

const getProductDetails = () => {
    fetch(`${Link}`)
      .then((response) => response.json())
      .then((products) => {
        return products;
      });
};

export default getProductDetails;