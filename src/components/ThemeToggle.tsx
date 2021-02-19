import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme }: any = useContext(ThemeContext);
  return (
    <div className="toggle-btn">
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default ThemeToggle;
