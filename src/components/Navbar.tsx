import logo from "../assets/images/boutique-logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FiShoppingCart, FiHome } from "react-icons/fi";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function NavBar() {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const { state } = useContext(AppContext);

  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="headerText">Brand Boutique</h1>
      </div>
      <div className="cartButtonContainer">
        {pathname === "/main" ? (
          <button className="cartBtn" onClick={() => navigate("/cart")}>
            <FiShoppingCart />{" "}
            <p className="itemCounter">
              {state.cart.length >= 1 ? state.cart.length : null}
            </p>
          </button>
        ) : (
          <button className="cartBtn" onClick={() => navigate("/")}>
            <FiHome />
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
