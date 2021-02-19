import React from "react";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todos from "./components/Todos";
import ThemeContextProvider from "./context/ThemeContext";
import TodoContextProvider from "./context/TodoContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
