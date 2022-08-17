import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserAuthContext from '../contexts/UserAuthContext.js';
import Index from "./Index.js"
import PrivatePath from './PrivatePath.js';

const Navigation = () => {
  return(
    <UserAuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={
            <PrivatePath>
                <Index/>
            </PrivatePath>
          }>

          </Route>
        </Routes>
      </BrowserRouter>
    </UserAuthContext>
  );
}
export default Navigation;