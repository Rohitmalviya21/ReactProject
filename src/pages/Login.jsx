import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

const [email, setEmail] = useState(localStorage.getItem('email') || '')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AuthContext)

  const security = (e) => {
    e.preventDefault()

    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    if (!email || !password) {
      return toast.error('All fields are required')
    }

    if (email !== storedEmail || password !== storedPassword) {
       toast.error('Email or password incorrect')
      setEmail('')
      setPassword('')
      return
     
    }

    toast.success('Login successful')

    setTimeout(() => {
      setIsLoggedIn(true)
      navigate('/')
    }, 2000)
  }

  return (
    <>
      <h1 className='login-heading'>Login</h1>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">

            <form className="login-form" onSubmit={security}>

              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>

              <p className="text-center mt-4 register-text">
                Don't have an account? <NavLink to="/register">Register</NavLink>
              </p>

            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
