import React from "react";
import './Navbar.css'

function Navbar () {
    return(
        <div>
            <div className='container'>
            <nav className='nav-css navbar navbar-ligth '>
                <a href='#' className='nav-item nav-link active'>
                    <img src='images/sunflower-icon.png' width='60' height='50' />
                    <span className='nav-name'>Clara Molina</span>
                </a>

                <button className='navbar-toggler' type='button' >

                </button>

                <ul className='nav justify-content-end'>
                    <li className='nav-item'>
                        <a className='nav-link a-color' href="">About me</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link a-color' href="">Experence</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link a-color' href="">Contact</a>
                    </li>
                </ul>
            </nav>
            </div>
        </div>

            
            

       
    )
}

export default Navbar