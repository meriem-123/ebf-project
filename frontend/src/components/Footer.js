import React from 'react'
import Aos from "aos";

import {useEffect} from 'react';

import {NavLink} from 'react-router-dom'


function Footer() {
  useEffect(() => {
    Aos.init({duration:3000})
    
  }, []);
  return (
    
      <div className="footer" data-aos="slide-left"> 
      <div className="footer-content">
        <div className="follow">
             <h6 className="footer-line">Check <a  ><NavLink to="/"><img className="logoo" src={"static/images/logoW.png"}/></NavLink></a> for more</h6>
             <div className="social-media">
             <h6 className="footer-line">You can also check us on our social media</h6>
               <ul className="social-icons">
                    <li>
                      <a  href="#"><i  className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a  href="#"><i  className="fa fa-facebook-square"></i></a>
                    </li>
                    <li>
                      <a  href="#"><i  className="fa fa-instagram"></i></a>
                    </li>
                    
                  </ul></div>
             </div>
             
             <div className="newsletter">
             <h6 className="footer-line">Get notifications from us</h6>
             <form  action="" className="newsletter-form">

                  <input type="text" className="newsletter-input" placeholder="Your Email adress...."></input>
                  <button className="newsletter-btn" type="submit">
                  <img data-aos="slide-left"  className="go" src={"static/images/go.svg"} />
                  </button>
                    </form>
             </div>
             

          

            </div></div>
      
    
  )
}

export default Footer
