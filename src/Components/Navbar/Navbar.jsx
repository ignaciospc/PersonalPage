import React from "react";
import './Navbar.css'

function Navbar () {
    return(
        <div>
            <div className=''>
                <nav className='nav-css navbar-expand-md navbar navbar-ligth '>
                    <a href='#' className='nav-item nav-link active'>
                        <img src='images/sunflower-icon.png' width='60' height='50' />
                        <span className='nav-name'>Clara Molina</span>
                    </a>

                    <button className='navbar-toggler mr-n1' type='button' data-bs-toggler='collapse' data-bs-formTarget='#collapseId' aria-controls='toggleMobileMenu' arua-aria-expanded='false' aria-lable='toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='collapseId'>
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
                    </div>

                </nav>
            </div>
        </div>

            
            

       
    )
}

export default Navbar