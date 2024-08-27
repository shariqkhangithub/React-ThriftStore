import react from "react";
import logo from "./../assets/logo.png";
import shop from "./../assets/shop.png";
import girl from "./../assets/girl.png"
import './nav.css';

function Nav() {

    return(
        <>
        <div className="nav">
            <div className="logo"><img src={logo} alt="" /> </div>
            <div className="menu">
                <div className="menu-list"><p>Home</p></div>
                <div className="menu-list"><p>Shop</p></div>
                <div className="menu-list"><p>About</p></div>
                <div className="menu-list"><p>Contact</p></div>
            </div>
            <div className="shop">
                {/* <img src={shop} alt="" /> */}
                <button className="log">log in</button>
                <button className="sign">sign up</button>
            </div>
        </div>
        <div className="front">
            <div className="front-one">
                <p>Trade-in-offer</p>
                <h1>Super Value deals</h1>
                <h1 className="colour">On all products</h1>
                <p>save more with coupons & up to 70% off</p>
                <button className="shop-btn colour">shop now</button>
            </div>
            <div className="front-two "><img src={girl} alt="" /></div>
        </div>
        </>
    )
    
}

export default Nav