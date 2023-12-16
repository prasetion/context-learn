import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import Toggle from "../../components/Toggle";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { MenuContext } from "../../context/MenuProvider";

const Menu = () => {
  useEffect(() => {
    handleGetMenu();
  }, []);

  const { isLigthTheme } = useContext(ThemeContext);
  const { menus, setMenus } = useContext(MenuContext);

  const handleGetMenu = async () => {
    try {
      const res = await axios.get("https://api.mudoapi.tech/menus");
      // console.log(res.data.data.Data);
      setMenus(res.data.data.Data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isLigthTheme);
  console.log(menus);

  return (
    <div>
      <Navbar />
      <Toggle />
      <h1>Menu</h1>
      {isLigthTheme ? <p>temanya ligth</p> : <p>temanya dark</p>}
      {menus.map((menu, id) => (
        <div key={id}>{menu.name}</div>
      ))}
    </div>
  );
};

export default Menu;
