import { createContext, useState } from "react";

export const TodoContext = createContext({});

const TodoContextProvider = ({ children }: any) => {
  //state
  const [todos, setTodos] = useState([
    { id: 1, title: "Viec 1" },
    { id: 2, title: "Viec 2" },
    { id: 3, title: "Viec 3" },
  ]);

  const addTodo = (newTodo: any) => {
    //Keep old value with 3 dots, and take new value when user add
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    //Remove value when user clicked which has same id as current
    setTodos(todos.filter((x) => x.id !== id));
  };

  const todoContextData = {
    todos,
    addTodo,
    removeTodo,
  };
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
