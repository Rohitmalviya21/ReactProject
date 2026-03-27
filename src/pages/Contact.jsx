import React from 'react'
import Arrival from '../component/Arrival'

const Contact = () => {
  return (
  <>
  <h1 className='Contact'>Contact us</h1>

   

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <form className="contact-form">
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Full Name"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email Address"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Subject"
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="contact-btn">
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
      <Arrival/>
    </>
  
  )
}

export default Contact


