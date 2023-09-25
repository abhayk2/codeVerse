import { useCart } from "../../context/CartContext";
import {CartEmpty} from "./components/CartEmpty";
import {CartList} from "./components/CartList";
import {useTitle} from "../../hooks/useTitle";

export const CartPage = () => {
  
  const {cartList}  = useCart();
  useTitle(`Cart-${cartList.length}`);

  return (
   <main>
    {cartList.length ? <CartList/> : <CartEmpty/>}
   </main>
  )
}
