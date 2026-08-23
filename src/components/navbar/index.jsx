import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../navbar/index.css";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const cartProducts = useSelector((state)=> state.cart.cartItem);
  console.log(cartProducts,"seeee vales")
  return (
    <>
      <nav>
        <div className="left">
          <div className="logo">
            <Link to='/home'><img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="rightt">
          <div className="list">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">AboutUs</Link></li>
              <li><Link to="/contactus">ContactUs</Link></li>
              <li><Link to="/cart">Cart {cartProducts.length > 0 && cartProducts.length}</Link></li>
            </ul>
          </div>
          {user ? (
            <button className="login-btn" onClick={() => navigate("/profile")}>Profile</button>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </nav>
    </>
  )
}
export default Navbar;