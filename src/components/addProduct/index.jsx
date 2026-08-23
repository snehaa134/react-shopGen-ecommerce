import { useNavigate } from "react-router-dom";
import addproduct from "../../assets/images/addProduct.jpg";
import "../addProduct/index.css";
const Add = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="main-add">
                <div className="left-part">
                    <img src={addproduct} alt="Add-product" />
                </div>
                <div className="right-part">
                    <p className="par">Add your products effortlessly and grow your store with ease.
                        Enter the product details, choose a suitable category, and add new items to your collection.
                        Keep your store updated with fresh and exciting products for your customers.
Start adding products today and make your online store more attractive and organized.</p>

                    <button className="add-btn" onClick={() => navigate("/add-product")}>Add product</button>
                </div>
            </div>
        </>
    )
}
export default Add;