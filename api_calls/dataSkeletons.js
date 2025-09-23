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
    store_photo: String(),
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
    quantity: String(),
  }
};

export default DataSkeletons;
