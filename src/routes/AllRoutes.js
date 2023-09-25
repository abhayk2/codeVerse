import { Routes, Route } from "react-router-dom";
import { HomePage, ProductList, ProductDetails, Login, Register, CartPage, OrderPage, DashboardPage,PageNotFound } from "../pages";
import { ProtectedRoute } from "./ProtectedRoutes";


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element= {<HomePage/>}/>
            <Route path="products" element= {<ProductList/>}/>
            <Route path="products/:id" element= {<ProductDetails/>}/>
            <Route path="login" element= {<Login/>}/>
            <Route path="register" element= {<Register/>}/>
            <Route path="cart" element= {<ProtectedRoute><CartPage/></ProtectedRoute>}/>
            <Route path="order-summary" element= {<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
            <Route path="dashboard" element= {<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
            <Route path="*" element = {<PageNotFound/>}/>
        </Routes>
    </>
  )
}
