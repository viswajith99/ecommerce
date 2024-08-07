import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Addproduct from "./admin/pages/Addproduct";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path=" /products" element={<Products/>}/>
        <Route path=" /contacts" element={<Contacts/>}/>
        <Route path=" /profile" element={<Profile/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/admin/product/add" element={<Addproduct/>}/>
       
      </Routes>
      <Footer/>
    </Router>
 
     

  );
}

export default App;
