import React,{useState, createContext} from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) =>{
  const [authState, setAuthState] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  return(
    <AuthContext.Provider value={[authState, setAuthState, userDetails, setUserDetails]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;