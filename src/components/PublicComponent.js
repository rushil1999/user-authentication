import React, {useContext} from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../contexts/AuthContextProvider';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import {useNavigate, useLocation } from 'react-router-dom';


const PublicComponent = () => {

    const [authState, setAuthState, userDetails ] = useContext(AuthContext);

    const navigate = useNavigate();
    const handleLogout = () =>{
        setAuthState(false)
    }

    const redirectToNavigation  = () => {
        navigate("/navigation")
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor:  "#CFDF2E",
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
                <Item>
                    <p>Public Component</p> 
                    {(authState === true) ? <p>User is Logged in as <strong>{userDetails.userName}</strong></p> : <p>User is NOT Logged in</p>}
                </Item>
                <div style={{textAlign: "center"}}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab variant="extended" size="medium" color="success" aria-label="add" onClick={() => redirectToNavigation()} >
                        Go Back to Navigation
                    </Fab>
                    <Fab variant="extended" size="medium" color="#E74C3C" aria-label="add" sx={{bgcolor: "#E74C3C"}} onClick={() => handleLogout()}>
                        Logout
                    </Fab>  
                </Box>
                </div>
            </Stack>
            </div>
        </div>
    )
}



export default PublicComponent;