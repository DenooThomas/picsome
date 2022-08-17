import {createContext, useState, useEffect} from "react"

const Context = createContext()

function ContextProvider(props){
    const [allPhotos, setAllPhotos] = useState([])
    const [cart, setCart] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id){
        setAllPhotos(prevPhotos => {
            return prevPhotos.map(photo => {
                if(photo.id === id && !photo.isFavorite){
                    return {...photo, isFavorite: true}
                }
                else if(photo.id === id && photo.isFavorite){
                    return {...photo, isFavorite: false}
                }
                else {
                    return {...photo}
                }
            })
        })
    }
    
    function addCart(id){
        setCart(prevCart => {
            return [...prevCart, id]
        })
    }

    function removeCart(id){
        setCart(prevCart => {
            return prevCart.map(item => {
                return prevCart.filter(item !== id)
            })
        })
    }
    function clearCart(){
        setCart([])
    }


    return (
        <Context.Provider value={{
            allPhotos,
            toggleFavorite,
            cart,
            addCart,
            removeCart,
            clearCart
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}