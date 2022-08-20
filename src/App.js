import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthContext from './contexts/AuthContextProvider.js'
import PathContext from './contexts/PathContextProvider.js'
import PrivatePath from './components/PrivatePath.js';
import Index from './components/Index.js';
import Login from './components/Login.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <div className="App">
      <AuthContext>
      <PathContext>
      <BrowserRouter>
        
        <Routes>
          <Route path="/index" element={
            <PrivatePath>
                <Index/>
            </PrivatePath>
          }>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/navigation" element={<Navigation/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </PathContext>
      </AuthContext>


    </div>
  );
}

export default App;
