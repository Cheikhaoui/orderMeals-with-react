import { useState } from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/layout/Header";
import Meals from "./Component/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModal,setModal] = useState(false) 

  const show = ()=>{
    setModal(true)
  }

  const hide = ()=>{
    setModal(false)
  }
  return (
    <CartProvider>
      <Header show={show}></Header>
      <Meals></Meals>
      {isModal &&<Cart onClose = {hide}/>}
    </CartProvider>
  );
}

export default App;
