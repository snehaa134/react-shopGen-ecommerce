
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cart/index.css";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeProduct } from "../../redux/cartslice";
const Cart = () => {
    // const [cartProducts, setCartProducts] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartProductsFromRedux = useSelector((state) => state.cart.cartItem)
    // const getCartProducts = () => {
    //     const products =
    //         JSON.parse(localStorage.getItem("cart")) || [];

    //     setCartProducts(products);
    // };

    // useEffect(() => {
    //     getCartProducts();
    // }, []);

    // const increaseQuantity = (id) => {


    //     const updatedProducts = cartProducts.map((item) =>
    //         item.id === id
    //             ? { ...item, quantity: item.quantity + 1 }
    //             : item
    //     );

    //     setCartProducts(updatedProducts);
    //     localStorage.setItem("cart", JSON.stringify(updatedProducts));
    // };

    // const decreaseQuantity = (id) => {
    //     const updatedProducts = cartProducts
    //         .map((item) =>
    //             item.id === id ? { ...item, quantity: item.quantity - 1 }
    //                 : item
    //         )
    //         .filter((item) => item.quantity > 0);

    //     setCartProducts(updatedProducts);
    //     localStorage.setItem("cart", JSON.stringify(updatedProducts));
    // };

    // const removeProduct = (id) => {
    //     const updatedProducts = cartProductsFromRedux.filter(
    //         (item) => item.id !== id
    //     );

    //     setCartProducts(updatedProducts);
    //     localStorage.setItem("cart", JSON.stringify(updatedProducts));
    // };

    const totalPrice = cartProductsFromRedux.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    );
   

    return (
        <>
            <div className="cart-page">
                {cartProductsFromRedux.length === 0 ? (
                    <div className="empty-cart">
                        <h2>Your cart is empty</h2>
                        <button className="shopping-btn" onClick={() => navigate("/home")}>Continue Shopping</button>
                    </div>
                ) : (
                    <div className="cart-products">
                        <h1>Shopping Cart</h1>

                        {cartProductsFromRedux.map((item) => (
                            <div className="cart-card" key={item.id}>
                                <img
                                    src={item.thumbnail || item.images?.[0]}
                                    alt={item.title}
                                />

                                <div className="cart-details">
                                    <h3>{item.title}</h3>

                                    <p>Price: ${Number(item.price).toFixed(2)}</p>
                                    <div className="quantity">
                                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() =>
                                                dispatch(increaseQuantity(item.id))
                                            }
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p>

                                        Total: ${item.price * item.quantity}

                                    </p>

                                    <button className="remove-btn"
                                        onClick={() => dispatch(removeProduct(item.id))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="mainn-class">
                            <div className="cart-total">
                                <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                            </div>

                            <div className="checkoutt-btn">
                                <button className="checkout-btn" onClick={() => navigate("/payment")}>Proceed to Payment</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;

