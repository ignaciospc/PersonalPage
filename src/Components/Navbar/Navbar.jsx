import React from "react";
import './Navbar.css'

function Navbar () {
    return(
        <div>
             <div className=''>
                <nav className='nav-css  navbar navbar-ligth '>

                    <div className=''>
                        <a href='#' className='nav-item nav-link active'>
                            <img src='images/sunflower-icon.png' width='60' height='50' />
                            <span className='nav-name p-2'>MC</span>
                        </a>
                    </div>

                    <div className=''>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a className='nav-link a-color' href="">Home</a>
                            </li>
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

                    <div className=''>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a href="#IG" className='nav-link'>
                                    <img src='images/facebook.png' width='40' height='40' />
                                </a>
                            </li>
                            <li className='nav-item' >
                                <a href="#FACE" className='nav-link'>
                                    <img src='images/twiter.png' width='40' height='40' />
                                </a>
                            </li>
                            <li className='nav-item' >
                                <a href="#TW" className='nav-link' >
                                    <img src='images/facebook.png' width='40' height='40' />
                                </a>
                            </li>
                        </ul>
                    </div>


                </nav>
            </div>
        </div>

        

    )
}

export default Navbar