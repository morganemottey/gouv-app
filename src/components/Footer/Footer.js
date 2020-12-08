import React from 'react'
import './Footer.css'

const Footer = (props) =>{
    return (
        <footer className="bg-dark text-center text-white p-2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2020, All Right Reserved Morgane Mottey</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li>Home</li>
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Policy</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
