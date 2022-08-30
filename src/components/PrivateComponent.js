import React, {useContext} from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../contexts/AuthContextProvider';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import {useNavigate, useLocation } from 'react-router-dom';


const PrivateComponent = () => {

    const [authState, setAuthState, userDetails ] = useContext(AuthContext);

    const navigate = useNavigate();
    const handleLogout = () =>{
        setAuthState(false)
    }

    const redirectToNavigation  = () => {
        navigate("/")
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor:  "#8BD3F7",
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
                    <p><strong><h2>Private Component</h2></strong></p> 
                    {(authState === true) ? <p style={{fontFamily: "papyrus"}}>User is Logged in as "<strong>{userDetails.userName}</strong>"</p> : <p style={{fontFamily: "papyrus"}}>User is NOT Logged in</p>}
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
            <div style={{textAlign: "center", justifyContent: "center", display: "flex"}}>
                <Paper elevation={3} 
                sx={{
                    padding: "10px",
                    width: "50%", 
                    border: 1, 
                    borderColor: 'primary.main', 
                    boxShadow: 1, 
                    bgcolor: "#C3EAD4", 
                    color: "#000406"
                }} 
                >
                This is a Private component and can only be access by Users that are signed in. 
                Content that requires User priviledges should be put in these components
                </Paper>
            </div>
        </div>
    )
}

export default PrivateComponent;