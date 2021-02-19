import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }: any) => {
  const [isAuth, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth(!isAuth);
  };

  const AuthContextData = {
    isAuth,
    toggleAuth,
  };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
