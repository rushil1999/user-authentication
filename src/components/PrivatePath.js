import React, {useContext} from 'react'
import {AuthContext} from '../contexts/AuthContextProvider';
const PrivatePath = ({children}) => {

  const userContext = useContext(AuthContext);
  console.log(userContext);
  const {userState} = userContext;
  if(userState === false){  
    console.log("User is NOT Signed in")

  }
  else{
    console.log("User is signed in")
  }
  return(
    <>
      {children}
    </>
  )

}

export default PrivatePath;