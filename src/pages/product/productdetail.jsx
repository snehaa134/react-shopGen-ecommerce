import { Link, useNavigate, useParams } from "react-router-dom";
import { axiosinstance } from "../../services/api";
import { useEffect, useState } from "react";
import "../product/productdetail.css";
import "../categoryDetails/index.css";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartslice";
import { useGetProductDetailsQuery } from "../../services/productApi/productApiSlice";

const Productdetails = () => {
    // const [product, setProduct] = useState()
    const navigate = useNavigate()
        const { id } = useParams();
    const { data, isLoading, isFetching, isError } = useGetProductDetailsQuery(id);
    console.log(data)
    const product = data;
    // const [load, setLoad] = useState(true)
    const dispatch = useDispatch();

    // const getCategoryDetails = async () => {
    //     try {
    //         const response = await axiosinstance.get(`/products/${id}`);
    //         console.log(response)
    //         if (response?.status === 200) {
    //             setLoad(false)
    //             setProduct(response.data)
    //             console.log(response.data)
    //         }
    //     } catch (error) {
    //         setLoad(false)
    //         console.log(error);
    //     }

    // }
    // useEffect(() => {
    //     getCategoryDetails()
    // }, [id])


    // const addToCart = () => {
    //        if(product){
    //         dispatch((product))
    //        }
    //     // try {
    //     //     const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    //     //     const existingProduct = oldCart.find(
    //     //         (item) => item.id === product.id
    //     //     );

    //     //     if (existingProduct) {
    //     //         return toast.error("Product is already in Cart!");

    //     //     } else {
    //     //         oldCart.push({
    //     //             ...product,
    //     //             quantity: 1
    //     //         });
    //     //     }

    //     //     localStorage.setItem("cart", JSON.stringify(oldCart));
    //     //     navigate("/cart")
    //     // } catch (error) {
    //     //     console.log(error);
    //     //     toast.error("Something went wrong")
    //     // }
    //     // toast.success("product Added to Cart!");
    // };


    if (isLoading) {
        return <p>fetching Product Details</p>
    }
    if(isError){
        return <p>Something went wrong!</p>
    }
    return (
        <>
            <div className="containerr">
                <div className="card">
                    <div className="left">
                        <img src={product?.thumbnail} alt={product?.title} />
                    </div>

                    <div className="right">
                        <h3>{product?.title}</h3>
                        <h4>⭐ {product?.rating}</h4>
                        <h2>$ {product?.price}</h2>
                        <p>{product?.description}</p>
                        <button className="add-cart-btn" onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <h3>Customer Reviews</h3>
                {product?.reviews?.slice(0, 2).map((review, index) => (
                    <div className="review" key={index}>
                        <p>⭐ {review?.rating}</p>
                        <p>{review?.comment}</p>
                        <span>- {review?.reviewerName}</span>

                    </div>
                ))}



            </div>
        </>
    )
}
export default Productdetails;

