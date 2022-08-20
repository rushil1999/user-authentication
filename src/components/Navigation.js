import React, { useContext, useEffect } from 'react';
import {Link } from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContextProvider.js';
import {PathContext} from '../contexts/PathContextProvider.js'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const Navigation = () => {

  const {authState} = useContext(AuthContext);
  const pathContextValue = useContext(PathContext);
  console.log(pathContextValue);
  const {publicPathList, setPublicPathList, privatePathList, setPrivatePathList} = pathContextValue
  const handleAddPublicPath = () => {
    const publicPathUrl = "public-path-1";
    publicPathList.push(publicPathUrl)
    console.log(publicPathList);
    setPublicPathList(publicPathList);
    console.log("Here")
  }

  useEffect(()=>{
    console.log("Called")
  },[publicPathList, privatePathList])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: authState === true ? "#2ECC71" : "#E74C3C",
    padding: theme.spacing(1),
    textAlign: 'center',
    sx:{
      boxShadow: 1,
      borderRadius: 4,
      borderColor: 'red',
      p: 2,
      minWidth: 300,
    }
  }));


  return(
    <div>
      <div style={{paddingBottom: "25px"}}>
        <Stack spacing={2}>
          <Item
            
          >{(authState === true) ? <p>User is Logged in</p> : <p>User is NOT Logged in</p>}</Item>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
        <Paper>
          <MenuList>
            {publicPathList.map((path) => {
              return(
                <MenuItem>{path}</MenuItem>

              )
            })}
            
          </MenuList>
        </Paper>
        <Paper>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
        </Stack>
        {/* <Link to="/">Home</Link> |{" "}
        <Link to="index">About</Link>
        <Link to="/login">Login</Link> */}
      </div>
      <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="medium" color="success" aria-label="add" onClick={() => handleAddPublicPath()}>
        Add a Public Path
      </Fab>
      <Fab variant="extended" size="medium" color="#E74C3C" aria-label="add" sx={{bgcolor: "#E74C3C"}}>
        Add a Private Path
      </Fab>
      
    </Box>
      </div>
    </div>
  );
}
export default Navigation;