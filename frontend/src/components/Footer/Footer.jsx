import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Bite Buzz connects you with your favorite local restaurants, delivering fresh, delicious meals straight to your door. With fast service and an easy-to-use platform, we make satisfying your cravings simple.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>support@bitebuzz.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="footer-review-link">
            <Link to="/submit-review">Submit Your Review</Link> {/* Ensure you're using the correct path */}
          </div>
      <p className="footer-copyright">Copyright 2024 ©BiteBuzz.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
