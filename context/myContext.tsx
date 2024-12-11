import React, { createContext, useState, useContext, ReactNode } from "react";
interface StoreProduct {
  photo: string;
  id: string;
  name: string;
  quantity: string;
  price: string;
  description: string;
}

interface valueContent {
    address: string;
    store_name: String;
    email: String;
    lastName: String;
    firstName: String;
    phoneNumber: String;
    id: string;
    cart: Array<String>;
}

interface filterContent {
  mainCat: string;
  subCat: Array<string>;
}

interface contextProp {
    value: valueContent;
    setState: React.Dispatch<React.SetStateAction<valueContent>>;
    filter: filterContent;
    setFilter: React.Dispatch<React.SetStateAction<filterContent>>;
    storeProducts: StoreProduct[];
    setStoreProducts: React.Dispatch<React.SetStateAction<StoreProduct[]>>;
}
export const MyContext = createContext<contextProp>({
    value: {cart:[],id:"", address:"",store_name: "", email: "", lastName:"", firstName:"", phoneNumber:""},
    setState: () => {},
    filter: {mainCat: "", subCat: []},
    setFilter: ()=>{},
    storeProducts: [],
    setStoreProducts: ()=>{},
});

interface child {
  children: ReactNode;
}

export const ProvideContext = ({ children }: child) => {
  const [filter, setFilter] = useState<filterContent>({mainCat: "", subCat: []})
  const [storeProducts, setStoreProducts] = useState<any>()
  const [value, setState] = useState<valueContent>({id:"",cart:[], address:"",store_name: "", email: "", lastName:"", firstName:"", phoneNumber:""});

  return (
    <MyContext.Provider value={{ value, setState, filter, setFilter, storeProducts, setStoreProducts }}>
      {children}
    </MyContext.Provider>
  );
};
