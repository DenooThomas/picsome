import React, { useContext, useState } from "react"

import "./styling.css"
import binImg from "../../img/delete-bin.svg"
import { Context } from "../../context/Context"

export default function Cart(){

    const {allPhotos, cart, removeCart, clearCart} = useContext(Context)

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)

    function handleSubmit(){
        if(cart.length > 0){
            setIsSubmitted(true)
            setTimeout(() => {
                clearCart()
                setIsSubmitted(false)
                setShowConfirmation(true)
            }, 2000);  
        }
    }
    console.log("isSubmitted => ", isSubmitted)

    const submitButton = 
        <button 
            className="cart-submit-button"
            onClick={handleSubmit}
            >{isSubmitted ? "Submitting order..." : "Submit order" }
        </button>

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
                                <img src={binImg} className="cart-option-icon" alt="cart option" onClick={() => removeCart(photoObj.id)}/>
                                <p className="cart-price">${price}</p>
                            </div>
                        </div>
                    )
                }
            })
        })

    const confirmationMessage = <p>Order received! Check your mailbox for further information.</p>

    return(
        <React.Fragment>
            <h1 className="cart-title">Check out</h1>
            <div className="cart-cont">
                {cartElements}
                {cart.length > 0 && <p className="cart-line cart-totalprice">Total price: ${totalPrice}</p>}
            </div>
            <div className="cart-line cart-submit-cont">
                {submitButton}
            </div>
            {showConfirmation && confirmationMessage}
        </React.Fragment>
    )
}