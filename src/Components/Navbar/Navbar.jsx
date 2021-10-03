import React from "react";
import './Navbar.css'

function Navbar () {
    return(
        <div>
            <nav className='nav-css navbar navbar-ligth '>
                <a href='#' className='nav-item nav-link active'>
                    <img src='images/sunflower-icon.png' width='60' height='50'/>
                    <span className='nav-name'>Clara Molina</span>
                </a>
            </nav>
        </div>
    )
}

export default Navbar