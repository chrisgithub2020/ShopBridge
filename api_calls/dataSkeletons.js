const DataSkeletons = {
  consumerUserData: {
    firstName: String(),
    lastName: String(),
    email: String(),
    phoneNumber: String(),
    address: String(),
    password: String(),
  },

  sellerUserData: {
    firstName: String(),
    lastName: String(),
    email: String(),
    phoneNumber: String(),
    address: String(),
    password: String(),
    store_photo: Array(),
    store_name: String(),
  },

  restockItemDetails: {
    itemID: String(),
    additionNumber: String(),
  },

  itemDetails: {
    itemImages: Array(),
    itemName: String(),
    itemDescription: String(),
    itemQuantity: String(),
    itemPrice: String(),
    itemMainCat: String(),
    itemSubCat: String(),
  }
};

export default DataSkeletons;
