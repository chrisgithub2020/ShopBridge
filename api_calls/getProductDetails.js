const getProductDetails = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        return products;
      });
};

export default getProductDetails;