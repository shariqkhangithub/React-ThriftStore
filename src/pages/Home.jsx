import react from "react";
import logo from "./../assets/logo.png";
import shop from "./../assets/shop.png";
import girl from "./../assets/girl.png"
import { Link  } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import './home.css';

function Nav() {

    return(
        <>
        <Navbar />
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