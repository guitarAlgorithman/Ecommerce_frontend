import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [dataUser, setDataUser] = useState(null);

  const login = (user,dataUser) => {
    setUser(user);
    setDataUser(dataUser)

  };

  const logout = (user) => {
    setUser(null);
    setDataUser(null)
  };




  return (
    <AuthContext.Provider value={{ user, dataUser, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
