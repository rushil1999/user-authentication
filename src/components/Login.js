import React, {useContext, useState} from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import { useNavigate, useLocation } from "react-router-dom";
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //State to store username entered by user
  const [userName, setUserName] = useState("")

  //State to give message to user in case of any form error
  const [userNameFieldMessage, setUserNameFieldMessage] = useState("");

  // State to indicate whether error is occured ot not 
  const [userNameFieldError, setUserNameFieldError] = useState(false);

  //useContext hook in action
  // useContext hook takes in the Context( AuthContext in this case) exported by the Context Provider component and gets the functions and objects passed in context
  const [authState, setAuthState, userDetails, setUserDetails] = useContext(AuthContext);

  // Function to handle the event when user clicks login
  const handleLogin = () => {
    //User name must not be empty
    if(userName.length === 0){
      setUserNameFieldMessage("Please fill in the name");
      setUserNameFieldError(true);
      return;
    }
    else if(setUserNameFieldError === true){
      return;
    }
    
    //This is where the child component, update the context state so all the components consuming the context can now refer to updated value
    setAuthState(true);
    setUserDetails({...userDetails, userName});

    //Navigating to the previoue URL on successfull login
    navigate(`${location.state.from.pathname}`)
  }

  //Stores username to state
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