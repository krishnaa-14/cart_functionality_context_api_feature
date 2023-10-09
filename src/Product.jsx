import {useContext} from 'react';
import { CartContext } from './contexts/CartContext';

const Product = ({products, id, title, imageUrl, price}) => {
    
    const {cartItems, setCartItems} = useContext(CartContext);

    const addItemToCart = (id) => {
        const item = products.find(product => product.id === id);
        setCartItems([...cartItems, item]);
    }

    const removeItemFromCart = (id) => {
        const newItems = cartItems.filter(item => item.id !== id);

        setCartItems(newItems);
    }

    return (
        <div style = {{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center", border : "1px solid black", padding : "15px", width : "350px", height : "350px"}}>
            <div>
                <img style = {{width : "250px", height : "250px"}} src = {imageUrl} />
                
                <div style = {{display : "flex", justifyContent : "space-between"}}>
                    <h3> {title} </h3>
                    <h5> Price - {price} </h5>
                </div>
            </div>

            <div style = {{display : "flex"}}>
                <button style = {{marginRight : "3px"}} onClick = {() => addItemToCart(id)}> Add to Cart </button>
                <button onClick = {() => removeItemFromCart(id)}> Remove Item </button>
            </div>
        </div>
    )
}

export default Product; 