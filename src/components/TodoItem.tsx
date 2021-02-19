import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";

type Props = { todo?: any; title?: string; removeTodo?: any };

const TodoItem = ({ todo }: Props) => {
  // Load Context
  const { removeTodo }: any = useContext(TodoContext);
  const { theme }: any = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  // Style
  const style = isLightTheme ? light : dark;

  return (
    <li onClick={() => removeTodo(todo.id)} style={style}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
