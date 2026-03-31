import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import WithoutFooterLayout from './WithoutFooterLayout'

import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Product from '../component/Product'
import SingleProduct from "../pages/SingleProduct";


const AllRoutes = () => {
  return (
   
      <Routes>

        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />

        <Route path='/about' element={
          <Layout>
            <About />
          </Layout>
        } />

        <Route path='/product' element={
          <Layout>
            <Product />
          </Layout>
        } />

        


        <Route path='/blog' element={
          <Layout>
            <Blog />
          </Layout>
        } />

        <Route path='/contact' element={
          <WithoutFooterLayout>
            <Contact />
          </WithoutFooterLayout>
        } />

        <Route path='/register' element={
          <WithoutFooterLayout>
            <Register />
          </WithoutFooterLayout>
        } />

        <Route path='/login' element={
          <WithoutFooterLayout>
            <Login />
          </WithoutFooterLayout>
        } />

        <Route path="/product/:id" element={
          <WithoutFooterLayout>
            <SingleProduct />
          </WithoutFooterLayout>
        } />

      </Routes>
  
  )
}

export default AllRoutes
