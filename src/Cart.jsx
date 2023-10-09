import Product from "./Product";
import {useContext} from 'react';
import { CartContext } from "./contexts/CartContext";

const Cart = () => {
    
    const {cartItems, setCartItems} = useContext(CartContext);
    
    return (
        <div>
            {cartItems.length > 0 && 
                <div style = {{display : "flex", flexWrap : "wrap", justifyContent : "center "}}>
                    {
                        cartItems.map(product => {
                            return (
                                <div key = {product.id} style = {{padding : "10px"}}>
                                    <Product id = {product.id} cartItems = {cartItems} setCartItems = {setCartItems} title = {product.title} imageUrl = {product.thumbnail} price = {product.price}></Product>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Cart;