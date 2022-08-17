import { useContext } from "react"

import "./styling.css"
import {Context} from "../../context/Context"
import Image from "../../components/Image"

export default function Gallery(){

    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map(imageObj => (
        <Image 
            key={imageObj.id} 
            img={imageObj}
        />
        
    ))

    return(
        <div className="gallery-cont">
            {imageElements}
        </div>
    )
}