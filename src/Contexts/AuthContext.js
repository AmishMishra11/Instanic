import { AuthReducer } from "../Reducers/AuthReducer";

import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const oldToken = localStorage.getItem("token");

  const [stateAuth, dispatchAuth] = useReducer(AuthReducer, {
    userDatails: [],
    token: oldToken ?? "",
    isAuth: oldToken ? true : false,
  });

  return (
    <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
