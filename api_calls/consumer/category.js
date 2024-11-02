import Link from "../serverLink"

const getCategoryProducts = (url) => {
  fetch(`${Link}`)
    .then((items) => items.json())
    .then((items) => {
      return items;
    });
};
