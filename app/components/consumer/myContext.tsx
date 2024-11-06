import React, { createContext, useState, useContext, ReactNode } from "react";

interface valueContent {
    address: String;
    store_name: String;
    email: String;
    lastName: String;
    firstName: String;
    phoneNumber: String;
}

interface contextProp {
    value: valueContent;
    setState: React.Dispatch<React.SetStateAction<valueContent>>;
}
export const MyContext = createContext<contextProp>({
    value: {address:"",store_name: "", email: "", lastName:"", firstName:"", phoneNumber:""},
    setState: () => {},
});

interface child {
  children: ReactNode;
}

export const ProvideContext = ({ children }: child) => {
  const [value, setState] = useState<valueContent>({address:"",store_name: "", email: "", lastName:"", firstName:"", phoneNumber:""});

  return (
    <MyContext.Provider value={{ value, setState }}>
      {children}
    </MyContext.Provider>
  );
};
