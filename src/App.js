import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/SignUp' element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
