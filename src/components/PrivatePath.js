import React, {useContext} from 'react'
import {UserContext} from '../contexts/UserAuthContext';
const PrivatePath = ({children}) => {

  const userContext = useContext(UserContext);
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