export type ProductData = {
    id: string;
    name: string;
    price: string;
    store_name: string;
    photo: string;
}

export type CartItem = {
  photoId: string;
  id: string;
  name: string;
  price: string;
  quantity: string;
}

export type OrderObject = {
  ProductName: string;
  quantity: string;
  price: string;
  deliveryFees: string;
  id: string;
}

export type StoreProduct = {
  photo: string;
  id: string;
  name: string;
  quantity: string;
  price: string;
  description: string;
}

export type filterContent = {
  mainCat: string;
  subCat: Array<string>;
}
