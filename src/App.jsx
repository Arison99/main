// src/App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import Menu from "./pages/Menu/Menu/Menu";
import MenuList from "./pages/Menu/MenuList/MenuList";
import Cart from "./pages/Cart/Cart/Cart";
import Categories from "./pages/Categories/Categories/Categories";
import CategoryList from "./pages/Categories/CategoryList/CategoryList";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import useCart from "./hooks/useCart";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Homepage/Home";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import AuthContext from "./contexts/AuthContext.jsx";

function App() {
  const { showModal } = useCart();
  const { isLoggedIn, setPrevUrl } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    setPrevUrl(location.pathname);
  }, [location.pathname, setPrevUrl]);

  return (
    <>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <div className="main">
          <Routes>
            <Route exact path="/restaurant" element={<Home />} />
            <Route
              exact
              path="/restaurant/menu"
              element={
                <Menu>
                  <MenuList />
                </Menu>
              }
            />
            <Route
              exact
              path="/restaurant/categories"
              element={
                <Categories>
                  <CategoryList />
                </Categories>
              }
            />
            <Route
              exact
              path="/restaurant/cart"
              element={
                isLoggedIn ? <Cart /> : <Navigate to="/restaurant/login" state={{ from: { pathname: "/restaurant/cart" } }} />
              }
            />
            <Route exact path="/restaurant/detail" element={<Detail />} />
            <Route exact path="/restaurant/signup" element={<SignUp />} />
            <Route exact path="/restaurant/login" element={<Login />} />
            <Route
              exact
              path="/restaurant/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/restaurant/login" state={{ from: { pathname: "/restaurant/dashboard" } }} />}
            />
            <Route exact path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>

      {showModal && <ConfirmationModal />}
    </>
  );
}

export default App;