import { Link, useParams } from "react-router-dom";
import { axiosinstance } from "../../services/api";
import { useEffect, useState } from "react";
import "../categoryDetails/index.css";
import { useGetProductsQuery } from "../../services/productApi/productApiSlice";

const Categorydetails = () => {
    const [search, setSearch] = useState("")
    const { name } = useParams();
    const { data, isLoading, isfetching, iserror } = useGetProductsQuery(name);
    console.log(data, "see data")
    const products = data?.products;
    // const [products, setProducts] = useState()
    // const [load, setLoad] = useState(true)
    // const getCategoryDetails = async () => {
    //     try {
    //         const response = await axiosinstance.get(`/products/category/${name}`);
    //         console.log(response)
    //         if (response?.status === 200) {
    //             setLoad(false)

    //             setProducts(response.data.products)
    //             console.log(response.data)
    //         }
    //     } catch (error) {    
    //         setLoad(false)
    //         console.log(error);

    //     }

    // }
    //    useEffect(() => {
    //         getCategoryDetails()
    //     }, [name])
    if (isLoading) {
        return (
            <p>fetching Product Details</p>
        )
    }
    const filteredProducts = products?.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) || item.price.toString().includes(search));
    console.log(search)
    return (
        <>
            <div className="category-details">
                <h2>Here is a Product Details</h2>

                <form className="search-part">
                    <input className="searchtext" type="text" name="search" placeholder="Search Products here" value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>

                <div className="products">
                    {filteredProducts?.map((product) => (
                        <div className="product" key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <h4>Price: ${product.price}</h4>
                            <Link to={`/category/${name}/${product.id}`}>
                                <button className="button-styling">View Details</button>
                            </Link>

                             <Link to={`/edit/${product.id}`}>
                                <button className="button-styling">Edit product</button>
                            </Link>


                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Categorydetails;

