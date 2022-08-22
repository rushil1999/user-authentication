import React, { useContext, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContextProvider.js';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';

const Navigation = () => {

  const navigate = useNavigate()

  const [authState, setAuthState, userDetails] = useContext(AuthContext);
  const pathContextValue = useContext(PathContext);
  const [publicPathList, privatePathList, setPublicPathList, setPrivatePathList] = pathContextValue
  

  const handleAddPublicPath = () => {
    const publicPathUrl = "public-path-1";
    const newList = [...publicPathList, publicPathUrl];
    setPublicPathList(newList);
  }

  const handleAddPrivatePath = () => {
    const privatePathUrl = "private-path-1";
    const newList = [...privatePathList, privatePathUrl];
    setPrivatePathList(newList);
  }

  const redirectToLogin = () =>{
    navigate("/login")
  }
  const redirectToPrivatePath = () =>{
    navigate("/private-path")
  }
  const redirectToPublicPath = () =>{
    navigate("/public-path")
  }

  const handleLogout = () =>{
    setAuthState(false)
  }



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: authState === true ? "#2ECC71" : "#E74C3C",
    padding: theme.spacing(1),
    textAlign: 'center',
    sx:{
      boxShadow: 1,
      borderRadius: 2,
      borderColor: 'red',
      p: 2,
    }
  }));


  return(
    <div>
      <div style={{paddingBottom: "25px"}}>
        <Stack spacing={2}>
          <Item
          >{(authState === true) ? <p>User is Logged in as <strong>{userDetails.userName}</strong></p> : <p>User is NOT Logged in</p>}</Item>
        </Stack>
        {authState === false && (<div style={{textAlign:"center"}}>
          <div style={{padding: "15px"}}>
          <Button variant="outlined" onClick={() => redirectToLogin()}> Go to Log in Screen</Button>
          </div>
        </div>)}
      </div>
      <div style={{textAlign: "center"}}>
      <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab disabled={publicPathList.length >= 5} variant="extended" size="medium" color="success" aria-label="add" onClick={() => redirectToPublicPath()}>
          Add a Public Path
        </Fab>
        <Fab disabled={privatePathList.length >= 5} variant="extended" size="medium" color="#E74C3C" aria-label="add" sx={{bgcolor: "#E74C3C"}} onClick={() => redirectToPrivatePath()}>
          Add a Private Path
        </Fab>  
      </Box>
      {authState === true && (<div style={{padding: "10px"}}>
        <Fab disabled={privatePathList.length >= 5} variant="extended" size="medium" color="#E74C3C" aria-label="add" sx={{bgcolor: "#4770EC"}} onClick={() => handleLogout()}>
            Log Out
        </Fab> 
      </div>) }
      </div>
      </div>
    </div>
  );
}
export default Navigation;