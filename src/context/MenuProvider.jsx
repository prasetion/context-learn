import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  //   const handleMenus = () => {
  //     setMenus(menus);
  //   };
  return (
    <MenuContext.Provider value={{ menus, setMenus }}>
      {children}
    </MenuContext.Provider>
  );
};
