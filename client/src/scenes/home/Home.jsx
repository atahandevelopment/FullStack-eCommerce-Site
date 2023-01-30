import MainCarousel from "./MainCarousel";
import Navbar from "../global/Navbar";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
     
      <Navbar/>
      <MainCarousel/>
      <ShoppingList/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home