import React, { useContext } from "react"

import "./styling.css"
import { Context } from "../../context/Context"

export default function Cart(){

    const {allPhotos, cart, removeCart, clearCart} = useContext(Context)

    console.log("allPhotos => ", allPhotos)
    console.log("cart => ", cart)

    const cartElements = 
        allPhotos.map(photoObj => {
            return cart.map(itemID => {
                if(photoObj.id === itemID){
                    return (
                        <div className="cart-line" key={itemID}>
                            <img alt="cart option" src={photoObj.url} width="50px" height="50px"/>
                            <div className="cart-options-cont">
                                <p>itemID - {itemID}</p>
                            </div>
                        </div>
                    )
                }
            })
        })

    return(
        <div className="cart-cont">
            <h1 className="cart-title">Check out</h1>
            {cartElements}
        </div>
    )
}