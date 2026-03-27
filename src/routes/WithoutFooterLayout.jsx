import React from 'react'
import Navbar from '../component/Navbar'

const WithoutFooterLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    
    
    </>
  )
}

export default WithoutFooterLayout