import React from "react" 
import { NavLink } from 'react-router-dom'
import CartWidget from "./CartWidget"
import ".././style.css"

const NavBar = () => {
    return (
        <nav className='navBar'>
            <NavLink to={`/`}><h1 className='logo'>fresh</h1></NavLink>
            <ul className= 'menu'>
                <li className='productos'><a href="#">productos</a>
                    <ul className='categorias'>
                        <li><NavLink to={`/category/ceniceros`}>Ceniceros</NavLink></li>  
                        <li><NavLink to={`/category/bandejas`}>Bandejas</NavLink></li>  
                        <li><NavLink to={`/category/accesorios`}>Accesorios</NavLink></li>
                    </ul>
                </li>
                <li style={{listStyle: 'none'}}> <a href="#">info</a> </li>
                <li style={{listStyle: 'none'}} > <CartWidget /> </li>
            </ul>
        </nav>
    )
}

export default NavBar