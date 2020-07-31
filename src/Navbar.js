import React, { useState } from "react";
import {useEffect} from 'react'
import "./Navbar.css";

function Navbar() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
     alt="Netflix-avatar"
     />
    </div>
  );
}

export default Navbar;
