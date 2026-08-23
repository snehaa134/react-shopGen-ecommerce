import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Categorydetails from "./pages/categoryDetails";
import About from "./pages/aboutusPage/about";
import Contact from "./pages/contactPage/contact";
import Productdetails from "./pages/product/productdetail";
import Home from "./pages/homePage/home";
import Addproduct from "./pages/addproductpage";
import NotFound from "./pages/defaultPage";
import Login from "./pages/login";
import Cart from "./pages/Cart";
import Payment from "./pages/paymentpage";
import ProtectedRoutes from "./pages/protectedroutes";
import Profile from "./pages/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PublicRoute from "./pages/publicRoute";
// import Practice from "./components/practice/practice";

import "./App.css";
import PublicRoute from "./pages/publicRoute";
import Edit from "./pages/editProduct";

//minimum order quantity
//wbere we added product it showns product is already added
//toast
//when we click on proceed to payment first logn than goes to payment page using localhost(navbar change ,imake button of profile and when we cicik signout button)

const App = () => {
  return (
    <>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Categorydetails />} />
        <Route path="/category/:name/:id" element={<Productdetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path = "/edit/:id" element={<Edit/>}/>
        <Route path="/home" element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />}/>
        </Route>
       <Route element={<PublicRoute/>}>
       <Route path="login" element={<Login/>}/>
       </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  )
}
export default App;

