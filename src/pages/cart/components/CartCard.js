import { Link } from "react-router-dom"
import { useCart } from "../../../context"

export const CartCard = ({product}) => {
  const {removeFromCart} = useCart();
    return (
      <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
        <div className="flex">
            <Link to="">
              <img className="w-32 rounded" src={product.poster} alt={product.name} />
            </Link>
            <div className="">
              <Link to={`products/${product.id}`}>
                <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
              </Link>            
              <button onClick={()=>removeFromCart(product)} className="inline-flex items-center py-2 px-3 ml-2 mt-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove</button>
            </div>
        </div>
        <div className="text-lg m-2 dark:text-slate-200">
          <span>${product.price}</span>
        </div>
      </div>
    )
  }