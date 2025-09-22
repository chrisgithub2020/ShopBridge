import React, { createContext, useState, useContext, ReactNode } from "react";
import { StoreProduct, filterContent } from "@/constants/types";


interface contextProp {
    a_token: React.MutableRefObject<string | null>;
    r_token: React.MutableRefObject<string | null>;
    cart: React.RefObject<Array<string>>;
    filter: filterContent | undefined;
    setFilter: React.Dispatch<React.SetStateAction<filterContent>>;
    storeItems: StoreProduct[] | undefined;
    setStoreItems: React.Dispatch<React.SetStateAction<StoreProduct[]>>;
}
export const MyContext = createContext<contextProp | undefined>(undefined);

interface child {
  children: ReactNode;
}

export const ProvideContext = () => {
  const context = useContext(MyContext)

  if (context === undefined) {
    throw "Context cannot be undefined"
  }

  return context;
};
