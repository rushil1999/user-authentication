import React,{useState, createContext} from 'react';

//Creating a context using 'createContext'
export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) =>{
  //Boolean value that would simply indicate whether User is signed in or nor
  const [authState, setAuthState] = useState(false);

  //Object to store other user details like name, email, etc
  const [userDetails, setUserDetails] = useState({});

  return(
    // Passing all the state and state change functions to all the components down in the tree, for them to get access of THIS component's state 
    <AuthContext.Provider value={[authState, setAuthState, userDetails, setUserDetails]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;