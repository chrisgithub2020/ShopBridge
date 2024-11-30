import React, { createContext, useState, useContext, ReactNode } from "react";

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
  subCat: string;
}

interface contextProp {
    value: valueContent;
    setState: React.Dispatch<React.SetStateAction<valueContent>>;
    filter: filterContent;
    setFilter: React.Dispatch<React.SetStateAction<filterContent>>;
}
export const MyContext = createContext<contextProp>({
    value: {cart:[],id:"", address:"",store_name: "", email: "", lastName:"", firstName:"", phoneNumber:""},
    setState: () => {},
    filter: {mainCat: "", subCat: ""},
    setFilter: ()=>{}
});

interface child {
  children: ReactNode;
}

export const ProvideContext = ({ children }: child) => {
  const [filter, setFilter] = useState<filterContent>({mainCat: "", subCat: ""})
  const [value, setState] = useState<valueContent>({id:"",cart:[], address:"",store_name: "", email: "", lastName:"", firstName:"", phoneNumber:""});

  return (
    <MyContext.Provider value={{ value, setState, filter, setFilter }}>
      {children}
    </MyContext.Provider>
  );
};
