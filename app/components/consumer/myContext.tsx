import React, { createContext, useState, useContext, ReactNode } from "react";

interface valueContent {
    acc: Object;
}

interface contextProp {
    value: valueContent;
    setState: React.Dispatch<React.SetStateAction<valueContent>>;
}
export const MyContext = createContext<contextProp>({
    value: {acc: {}},
    setState: () => {},
});

interface child {
  children: ReactNode;
}

export const ProvideContext = ({ children }: child) => {
  const [value, setState] = useState({"acc": {}});

  return (
    <MyContext.Provider value={{ value, setState }}>
      {children}
    </MyContext.Provider>
  );
};
