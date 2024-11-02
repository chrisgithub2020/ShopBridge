import Link from "../serverLink"

const getHomePageProducts = async () => {
  fetch(`${Link}/getTodaysProducts`)
    .then((response) => response.json())
    .then((products) => {
      return products;
    });
};


export default getHomePageProducts