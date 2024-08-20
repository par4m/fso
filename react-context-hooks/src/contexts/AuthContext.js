import { createContext, useState } from "react";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    toggleAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider;
