import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../../assets/logo.png"
import "./nav.css"

const Navbar = () => {
    return (
        // <div>nav</div> 
        <>
            {/* <h1>hello</h1> */}
            <div className='nav'>
                <div className='logo'><img src={logo} alt="" /></div>
                <div className='menu'>
                {/* <div className="menu-list"><p>Home</p></div> */}
                <div className="menu-list"><Link className='lnk' to={'/'}>Home</Link></div>
                {/* <div className="menu-list"><p>Shop</p></div> */}
                <div className="menu-list"><Link className='lnk' to={'/shop'}>Shop</Link></div>
                {/* <div className="menu-list"><p>About</p></div> */}
                <div className="menu-list"><Link className='lnk' to={'/About'}>About</Link></div>
                {/* <div className="menu-list"><p>Contact</p></div> */}
                <div className="menu-list"><Link className='lnk' to={'/Contact'}>Countact</Link></div>
                </div>
                <div className="shop">
                {/* <img src={shop} alt="" /> */}
                <button className="log">log in</button>
                <button className="sign">sign up</button>
            </div>
            </div>
           

        </>
    )
}

export default Navbar