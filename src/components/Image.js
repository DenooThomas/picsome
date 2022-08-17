import React, {useState, useContext} from "react"

import heartEmpty from "../img/heart-empty.svg"
import heartFill from "../img/heart-fill.svg"
import addIcon from "../img/add-circle.svg"
import { Context } from "../context/Context"

export default function Image({img}){

    const {toggleFavorite, addCart} = useContext(Context)

    const [isHovered, setIsHovered] = useState(false)

    const addImg = <img src={addIcon} alt="add icon" className="gallery-icon left" onClick={() => addCart(img.id)}/>
    const heartImg = <img src={img.isFavorite ? heartFill : heartEmpty} alt="heart icon" className="gallery-icon right" onClick={() => toggleFavorite(img.id)}/>
    
    return (
        <div 
            className="gallery-image-cont" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <img className="gallery-image"
                id={img.id}
                src={img.url}
                alt="gallery option"
            />
            {isHovered && 
                <React.Fragment>
                {addImg}
                {heartImg}
                </React.Fragment>
            }
        </div>
    )
}