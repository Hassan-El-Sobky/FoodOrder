
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './context/CartProvider';

function App() {

  const [showcartSate,setShowCart]=useState(false);

  const ShowCartHandler=()=>{
     setShowCart(true);
  }
  const hideCartHandler=()=>{
    setShowCart(false);
  }
  return (
    <CartProvider>
     { showcartSate && <Cart hideCartHandler={hideCartHandler}  />}
    <Header ShowCartHandler={ShowCartHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
