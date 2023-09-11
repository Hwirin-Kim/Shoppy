import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import NewProduct from "./pages/NewProduct";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/carts" element={<MyCart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
