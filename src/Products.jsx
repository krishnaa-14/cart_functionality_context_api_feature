import {useState, useEffect} from 'react';
import Product from './Product';

const Products = ({cartItems, setCartItems}) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();

        console.log(json);
        setProducts(json.products);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>
            {products.length > 0 && 
                <div style = {{display : "flex", flexWrap : "wrap", justifyContent : "center "}}>
                    {
                        products.map(product => {
                            return (
                                <div key = {product.id} style = {{padding : "10px"}}>
                                    <Product  products = {products} id = {product.id} cartItems = {cartItems} setCartItems = {setCartItems} title = {product.title} imageUrl = {product.thumbnail} price = {product.price}></Product>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Products;