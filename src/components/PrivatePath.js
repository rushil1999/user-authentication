import React, {useContext} from 'react'
import {AuthContext} from '../contexts/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivatePath = ({children}) => {

  const location = useLocation()
  const authContext = useContext(AuthContext);
  const [authState] = authContext;
  
  return(
    <>
      {authState ? (<>{children}</>) : (
        <Navigate to="/login" state={{ from: location }} replace />
      ) }
    </>
  )

}

export default PrivatePath;