import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  //Load theme context
  const { theme }: any = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style: any = isLightTheme ? light : dark;

  //Load auth context
  const { isAuth, toggleAuth }: any = useContext(AuthContext);

  return (
    <div className="navbar" style={style}>
      <h1>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuth ? "You are login " : ""}
          <button onClick={toggleAuth}>{isAuth ? "Logout" : "Login"}</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
