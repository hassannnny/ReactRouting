import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";


const NavBar = () => {
    return (

       
            <nav className="nav"> 
                
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/profile'>Profile</Link></li>
                <li><Link to = '/cart'>Cart</Link></li>
                <li><Link to = '/orders'>Orders</Link></li>
            

            </nav>
        
       
    )

    
}


export default NavBar
