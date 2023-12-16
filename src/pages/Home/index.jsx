import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import Toggle from "../../components/Toggle";
import Navbar from "../../components/Navbar";
import { MenuContext } from "../../context/MenuProvider";

const Home = () => {
  const { isLigthTheme } = useContext(ThemeContext);
  const { menus } = useContext(MenuContext);

  console.log(isLigthTheme);
  console.log(menus);

  return (
    <div>
      <Navbar />
      <Toggle />
      <h1>Home</h1>
      {isLigthTheme ? <p>temanya ligth</p> : <p>temanya dark</p>}
    </div>
  );
};

export default Home;
