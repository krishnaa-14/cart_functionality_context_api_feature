import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import {useState} from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]); 

  return (
    <div>
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path = "/" exact element = {<Products cartItems = {cartItems} setCartItems = {setCartItems}> </Products>}> </Route>
            <Route path = "/cart" exact element = {<Cart cartItems = {cartItems} setCartItems = {setCartItems}></Cart>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;
