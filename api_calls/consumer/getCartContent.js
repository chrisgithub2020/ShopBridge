const getCartContent = (urls) => {
    urls.forEach((url) => {
        fetch(url)
          .then((response) => response.json())
          .then((products) => {
            return products;
          });
    })
};

export default getCartContent;