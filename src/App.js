import React from 'react';
import './App.css';
import Arrival from './component/Arrival';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Product from './component/Product';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AllRoutes from './routes/AllRoutes';
import Layout from './routes/Layout';
import WithoutFooterLayout from './routes/WithoutFooterLayout';
import AuthProvider from './context/AuthContext';


function App() {

  return (
    <>
      {/* <Arrival/> */}
      {/* <Navbar/> */}
      {/* <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </BrowserRouter> */}
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>



    </>

  );
}

export default App;
