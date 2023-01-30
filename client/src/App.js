import { useEffect } from "react";
import {BrowserRouter,
Routes,
Route,
useLocation} from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import CartMenu from "./scenes/global/CartMenu";


function App() {
  const ScrollTop = () => {
    const {pathname } = useLocation();

    useEffect(()=>{
      window.scrollTo(0,0);
    }, [pathname])

    return null;
  }
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollTop/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="item/:itemId" element={<ItemDetails/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="checkout/success" element={<Confirmation/>}/>
        </Routes>
        <CartMenu/>
      </BrowserRouter>
    </div>
  );
}

export default App;
