import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Context/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const showCartHandler = () => {
    setCartOpen(true);
  };

  const HideCartHandler = () => {
    setCartOpen(false);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart onCloseCart={HideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
