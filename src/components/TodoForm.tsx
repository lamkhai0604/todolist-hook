import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  // Load context
  const { addTodo }: any = useContext(TodoContext);
  const { theme }: any = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  // Style
  const style = isLightTheme ? light : dark;

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    });
    //Reset value input when user click add btn
    setTitle("");
  };

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Enter new todo..."
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
