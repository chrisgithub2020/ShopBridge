import Link from "../serverLink"


const getCartContent = (urls) => {
    urls.forEach((url) => {
        fetch(`${Link}/${url}`)
          .then((response) => response.json())
          .then((products) => {
            return products;
          });
    })
};

export default getCartContent;