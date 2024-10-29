const getHomePageProducts = async () => {
  fetch("https://a9f9-154-161-188-153.ngrok-free.app/getTodaysProducts")
    .then((response) => response.json())
    .then((products) => {
      return products;
    });
};


export default getHomePageProducts