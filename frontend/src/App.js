import React, { createContext, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from '../src/component/Home'
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Profile from './component/Profile';
import Errorpage from './component/Errorpage';
import Footer from './component/Footer';
import Products from './component/Products';
import Register from './component/Register';
import { initialState, reducer } from './reducer/UserReducer'
import Logout from './component/Logout';

export const userContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/products' element={<Products />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;