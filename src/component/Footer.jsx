import React from "react";
import logo from "../Images/logo.png";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container footer-top">


                    <div className="footer-col">
                        <img src={logo} alt="Famms" className="footer-logo" />
                        <p><strong>ADDRESS:</strong> 28 Atuly tower, It Park Indore, INDIA</p>
                        <p><strong>TELEPHONE:</strong> +91 9234 5678 99</p>
                        <p><strong>EMAIL:</strong> fammsindia@gmail.com</p>
                    </div>


                    <div className="footer-col">
                        <h4>MENU</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Testimonial</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    <div className="footer-col">
                        <h4>ACCOUNT</h4>
                        <ul>
                            <li>Account</li>
                            <li>Checkout</li>
                            <li>Login</li>
                            <li>Register</li>
                            <li>Shopping</li>
                            <li>Widget</li>
                        </ul>
                    </div>


                    <div className="footer-col">
                        <h4>NEWSLETTER</h4>
                        <p>Subscribe to our newsletter and get update notifications.</p>
                        <div className="footer-newsletter">
                            <input type="email" placeholder="Enter Your Mail" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                </div>


                <div className="footer-bottom">
                    <br />
                    Designed By @
                    <a
                        href="https://github.com/Rohitmalviya21"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Rohit Malviya</span>  
                    </a>
                </div>

            </footer>
        </>
    );
};

export default Footer;
