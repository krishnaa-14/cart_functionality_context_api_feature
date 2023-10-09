import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import {useState} from 'react';
import CartProvider from './contexts/CartContext';

function App() {

  const [cartItems, setCartItems] = useState([]); 

  return (
    <CartProvider>
      <div>
        <div>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path = "/" exact element = {<Products> </Products>}> </Route>
              <Route path = "/cart" exact element = {<Cart> </Cart>}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </CartProvider>
  )
}

export default App;
