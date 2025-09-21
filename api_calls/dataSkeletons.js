const DataSkeletons = {
  consumerUserData: {
    id: "",
    firstName: String(),
    lastName: String(),
    email: String(),
    phoneNumber: String(),
    address: String(),
    password: String(),
    type: "c",
  },

  sellerUserData: {
    id: "",
    firstName: String(),
    lastName: String(),
    email: String(),
    phoneNumber: String(),
    address: String(),
    password: String(),
    store_photo: Array(),
    store_name: String(),
    type: "s",
  },

  signIN: {
    identifier: String(),
    password: String(),
    acc_type: String(),
  },

  restockItemDetails: {
    itemID: String(),
    additionNumber: String(),
  },

  itemDetails: {
    itemSeller: String(),
    itemImages: Array(),
    itemName: String(),
    itemDescription: String(),
    itemQuantity: String(),
    itemPrice: String(),
    itemMainCat: String(),
    itemSubCat: String(),
  },

  orderDetails: {
    product: String(),
    amountPaid: Number(),
    address: String(),
    quantity: String(),
  }
};

export default DataSkeletons;
