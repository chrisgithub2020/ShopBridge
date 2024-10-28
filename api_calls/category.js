const getCategoryProducts = (url) => {
  fetch(url)
    .then((items) => items.json())
    .then((items) => {
      return items;
    });
};
