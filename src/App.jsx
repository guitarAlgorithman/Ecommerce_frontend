import "./App.css";
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import { ProductList } from "./components/products/ProductList";
import ProductState from "./components/Context/Products/ProductState";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/products/product";
import Navigationbar from "./components/partials/NavigationBar";
import Login from "./components/usuario/Login";
import ShoppingCartState from "./components/Context/Cart/ShoppingCartState";
import Cart from "./components/paypal/Cart";
import Perfil from "./components/usuario/Perfil";
import Register from "./components/usuario/Register";
import { AuthProvider } from "./components/Context/Auth/Auth";
import Logout from "./components/usuario/Logout";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";

function App() {
  
  return (
    <div>
      <AuthProvider>
        <Header />

        <ShoppingCartState>
          <ProductState>
            <Routes>
              <Route path="./Ecommerce_frontend" element={<ProductList />} />
              {/* <Route index element={<ProductList />} /> */}
              <Route path="./Ecommerce_frontend/product/:id" element={<Product />} />
              <Route path="./Ecommerce_frontend/Login" element={<Login />} />
              <Route path="./Ecommerce_frontend/Cart" element={<Cart />} />
              <Route path="./Ecommerce_frontend/Perfil" element={<Perfil />} />
              <Route path="./Ecommerce_frontend/Signin" element={<Register />} />
              <Route path="./Ecommerce_frontend/Logout" element={<Logout />} />
            </Routes>
          </ProductState>
        </ShoppingCartState>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
