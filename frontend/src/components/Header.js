import React, { Component } from 'react'


import {NavLink} from 'react-router-dom'

import { withRouter } from "react-router-dom";

function Header({logo,class1,class2}){
  

  
  

    


    return (
      <div >
    <div className="header">
      <div className="container">
        <nav className="nav">
          <div className="menu-toggle" >
            <i className="fa fa-bars"></i>
            <i className="fa fa-times"></i>
          </div>
          <a  className="logo"><NavLink to="/"><img src={logo}/></NavLink></a>
          
          <ul className="nav-list">
          
          
              
            <li ><NavLink to="/events" className={class1}  >Our Events</NavLink>
              
            </li>

            
            
            <li ><NavLink to="/getBadge" className={class2}  >
              
            Get your badge</NavLink>
            </li>
            
                 
          </ul>
          </nav>
          
      </div>
      </div>
      
      </div>
    )
  }


export default Header;