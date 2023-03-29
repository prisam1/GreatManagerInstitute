import React from "react";
// import { Link, useNavigate } from 'react-router-dom'
import "../style/header.css"
const Header = () => {

  // const navigate = useNavigate()
   
  // const handleLogout = () => {

  //   localStorage.clear()
  //   if(!(localStorage.getItem("token")))
  //  {  
  //    navigate('/login') 
  //  }
            
 

  return (
    <>
         <div className="top">  
         
            <h1 className="h1">New</h1>
            <div className="navbar">
              Subscribe 
            </div>
          </div>
          
    </>
  );
};

export default Header;