import React,{useState, createContext} from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) =>{
  const [authState, setAuthState] = useState({})
  return(
    <AuthContext.Provider value={{authState, setAuthState}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;