import React, {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {setAuthState} = useContext(AuthContext);
  const handleLogin = () => {
    setAuthState(true);
    navigate("/navigation")
  }

  return(
    <button
    onClick={() => handleLogin()}
    >
      Login User
    </button>
  )
}

export default Login;