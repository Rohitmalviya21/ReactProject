import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import Contact from "./Contact";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    Cpassword: ''
  })

  const handleEvet = (e) => {
    const { name, value } = e.target
    setFormdata({
      ...formdata,
      [name]: value
    })
  }

  const handlesubmit = (e) => {
    e.preventDefault();

    const { name, email, contact, password, Cpassword } = formdata;

    if (!name || !email || !contact || !password || !Cpassword) {
      return toast.error("All fields are required");

    }

    if (password !== Cpassword) {
      return toast.error("Passwords do not match");
    }

    toast.success("Registered successfully");

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("contact", contact);
    localStorage.setItem("password", password);

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };




  return (
    <>

      <h1 className="create-Account">Create Account</h1>


      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form className="login-form" onSubmit={handlesubmit}>

              <div className="mb-3" >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="name"
                  value={formdata.name}
                  onChange={handleEvet}
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  value={formdata.email}
                  onChange={handleEvet}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Contact"
                  name="contact"
                  value={formdata.contact}
                  onChange={handleEvet}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formdata.password}
                  onChange={handleEvet}
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="Cpassword"
                  value={formdata.Cpassword}
                  onChange={handleEvet}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="login-btn" >
                  Register
                </button>
              </div>

              <p className="text-center mt-4 register-text">
                Already have an account?{" "}
                <NavLink to="/login">Login</NavLink>
              </p>

            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
