import {Link} from "react-router-dom"
import { useContext } from "react"

import cartImg from "../img/shopping-cart-fill.svg"
import { Context } from "../context/Context"

export default function Header(){

    const {cart} = useContext(Context)
    return (
        <div className="header-cont">
            <Link to="/"><h1 className="header-title">Pic Some</h1></Link>
            <Link to="cart">
                <div className="cart-header-cont">
                    <img className="cart-header-img" src={cartImg} alt="shopping cart"></img>
                    <p className="cart-counter">{cart.length}</p>
                </div>    
            </Link>
        </div>
        
    )
}