import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthContext from './contexts/AuthContextProvider.js'
import PrivatePath from './components/PrivatePath.js';
import Login from './components/Login.js';
import Navigation from './components/Navigation.js';
import PrivateComponent from './components/PrivateComponent.js';
import PublicComponent from './components/PublicComponent.js';
import LandingPage from './components/LandingPage.js';

function App() {
  return (
    <div className="App">
      {/* The AuthContext component. All the components inside of this HTML Tag will have access to context */}
      <AuthContext>
      <BrowserRouter>
        <Routes>
          {/* This is a private component, that will look into the context, if the user is not logged in, redirect to Login Page*/ }
          <Route path="/private-path" element={
            <PrivatePath>
                <PrivateComponent/>
            </PrivatePath>
          }></Route>

          {/* These are public components that do not require user to be logged in to visit these pages */}
          <Route path="/public-path" element={<PublicComponent/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="" element={<Navigation/>}></Route>
          {/* <Route path="" element={<LandingPage/>}></Route> */}
        </Routes>
      </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
