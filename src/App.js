import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthContext from './contexts/AuthContextProvider.js'
import PrivatePath from './components/PrivatePath.js';
import Login from './components/Login.js';
import Navigation from './components/Navigation.js';
import PrivateComponent from './components/PrivateComponent.js';
import PublicComponent from './components/PublicComponent.js';

function App() {
  return (
    <div className="App">
      <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/private-path" element={
            <PrivatePath>
                <PrivateComponent/>
            </PrivatePath>
          }></Route>
          <Route path="/public-path" element={<PublicComponent/>}></Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/navigation" element={<Navigation/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthContext>


    </div>
  );
}

export default App;
