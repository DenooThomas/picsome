import React, { useContext } from "react"

import "./styling.css"
import binImg from "../../img/delete-bin.svg"
import { Context } from "../../context/Context"

export default function Cart(){

    const {allPhotos, cart, removeCart, clearCart} = useContext(Context)

    console.log("allPhotos => ", allPhotos)
    console.log("cart => ", cart)

    const price = 5.95
    const totalPrice = cart.length*price

    const cartElements = 
        allPhotos.map(photoObj => {
            return cart.map(itemID => {
                if(photoObj.id === itemID){
                    return (
                        <div className="cart-line" key={itemID}>
                            <img src={photoObj.url} className="cart-img" alt="cart option"/>
                            <div className="cart-black-line"></div>
                            <div className="cart-option-cont">
                                <img src={binImg} className="cart-option-icon" alt="cart option"></img>
                                <p className="cart-price">${price}</p>
                            </div>
                        </div>
                    )
                }
            })
        })

    return(
        <React.Fragment>
            <h1 className="cart-title">Check out</h1>
            <div className="cart-cont">
                {cartElements}
                <p className="cart-line cart-totalprice">Total price: ${totalPrice}</p>
            </div>
        </React.Fragment>
    )
}