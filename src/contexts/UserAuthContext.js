import React,{useState, createContext} from 'react';

export const UserContext = createContext(null);

const UserAuthContext = ({children}) =>{
  const [userState, setUserState] = useState({})
  return(
    <UserContext.Provider value={{userState, setUserState}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserAuthContext;