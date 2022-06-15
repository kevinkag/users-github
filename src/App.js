import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPrincipal from './components/pages/UsersPrincipal';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import UserItemTemplate from './components/pages/UserItemTemplate';
import Error from './components/pages/Error';

function App() {
 
  return (
    <div style={{backgroundColor:'#ef89b1', height: '100vh', padding: 1}}>
      <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/users-github" element={<UsersPrincipal />} />
            <Route path="/users-github/user/:login" element={<UserItemTemplate />} />
            <Route path="/users-github/error" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </React.Fragment>
    </div>
  );
}

export default App