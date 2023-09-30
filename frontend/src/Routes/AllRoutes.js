import { Route, Routes } from "react-router-dom"
import Product from "../Components/product";
import Cart from "../Components/cart";
function AllRoute(){
return(
    <div>
        <Routes>
        <Route path='/' element={<Product/>}/>
        < Route path='/cart' element={<Cart/>}/>
          
        </Routes>
    </div>
)
}
export default AllRoute;