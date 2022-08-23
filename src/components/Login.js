import React, {useContext, useState} from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import { useNavigate, useLocation } from "react-router-dom";
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [userName, setUserName] = useState("")
  const [userNameFieldMessage, setUserNameFieldMessage] = useState("");
  const [userNameFieldError, setUserNameFieldError] = useState(false);
  const [authState, setAuthState, userDetails, setUserDetails] = useContext(AuthContext);

  const handleLogin = () => {
    if(userName.length == 0){
      setUserNameFieldMessage("Please fill in the name");
      setUserNameFieldError(true);
      return;
    }
    else if(setUserNameFieldError === true){
      return;
    }
    
    setAuthState(true);
    setUserDetails({...userDetails, userName});
    navigate(`${location.state.from.pathname}`)
  }

  const handleUserNameFieldChange = (e) => {
    if(e.target.value > 0){
      setUserNameFieldMessage("");
      setUserNameFieldError(false);
    }

    if(e.target.value > 10){
      setUserNameFieldMessage("Name too long");
      setUserNameFieldError(true);
    }
    setUserName(e.target.value)
  }

  return(
    <div>
      <div style={{textAlign: "center", margin: "35px"}}>
        <div style={{padding: "15px"}}>
        <TextField
            error={userNameFieldError}
            id="username"
            defaultValue=""
            helperText={userNameFieldMessage}
            onChange={handleUserNameFieldChange}
          />
        </div>
      <Button variant="contained" onClick={() => handleLogin()}>
        Login User
      </Button>
      </div>
      <div style={{textAlign: "center", justifyContent: "center", display: "flex"}}>
        <Paper elevation={3} 
          sx={{
            padding: "10px",
            width: "50%", 
            border: 1, 
            borderColor: 'primary.main', 
            boxShadow: 1, 
            bgcolor: "#C3EAD4", 
            color: "#58615C"
          }} 
          >
          This is where you have to get User credentials.
          Fields like username, password, email, etc can be acquired from this component.
        </Paper>
      </div>
    </div>
  )
}

export default Login;