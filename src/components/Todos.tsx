import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { AuthContext } from "../context/AuthContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
  //load context
  const { todos }: any = useContext(TodoContext);

  //load auth context
  const { isAuth }: any = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm />
      {isAuth ? (
        <ul>
          {todos.map((value: any) => (
            <TodoItem todo={value} key={value.id} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>Not authorized</p>
      )}
    </div>
  );
};

export default Todos;
