
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosinstance } from "../../services/api";
import { useState, useEffect } from "react";
import "../addproductpage/index.css";
import { toast } from "react-toastify";
import { useAddProductMutation, useGetProductCategoryListQuery } from "../../services/productApi/productApiSlice";

const Addproduct = () => {
    // const [load, setLoad] = useState(false);
    // const [products, setProducts] = useState([]);
    // const [categoryList, setCategoryList] = useState([]);
       const {data,isError}= useGetProductCategoryListQuery()
    const categoryList = data
    const [addProduct,{isLoading}]= useAddProductMutation()
 


    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            category: ""
        },

        validationSchema: Yup.object({
            title: Yup.string().required("Product title is required"),
            description: Yup.string().required("Description is required"),
            price: Yup.string().required("Price is required"),
            category: Yup.string().required("Category is required")
        }),

        onSubmit: async (values) => {
            try {
                console.log(values);
                // if (values) {
                    const response = await addProduct({
                     title:values.title,
                     description:values.description,
                     price: values.price,
                     category: values.category
                     
                    })


                    // console.log(response);

                //     if (response) {
                //         setProducts(response);
                //         setLoad(false);
                //         formik.resetForm();
                //     }
                // }
            } catch (error) {
                // setLoad(false);
                console.log(error);
            }
        }
    });


    // const getCategoryList = async () => {
    //     try {
    //         const response = await axiosinstance.get("/products/category-list");
    //         console.log(response);
    //         if (response?.status === 200) {
    //             setCategoryList(response.data);
    //             console.log(response.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setLoad(false);
    //         toast.error("Something went wrong")
    //     }
    // };

    // useEffect(() => {
    //     getCategoryList();
    // }, []);


    if (isLoading) {
        return <p>loading data..</p>;
    }

    return (
        <>
            <div className="main">
                <div className="main-form">
                    <h2>Fill the details</h2>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="add-product">

                            <div className="form-group">
                                <label>Title</label>

                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Product name"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.touched.title &&
                                    formik.errors.title ? (
                                    <p className="error-thrown">{formik.errors.title}</p>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Description</label>

                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Product Description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.touched.description &&
                                    formik.errors.description ? (
                                    <p className="error-thrown">{formik.errors.description}</p>
                                ) : null}
                            </div>


                            <div className="form-group">
                                <label>Price</label>

                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Product Price"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.touched.price &&
                                    formik.errors.price ? (
                                    <p className="error-thrown">{formik.errors.price}</p>
                                ) : null}
                            </div>

                            <select
                                name="category"
                                value={formik.values.category}
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                            >
                                <option value="">
                                    Select Category
                                </option>

                                {categoryList?.map((category) => (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                ))}
                            </select>
                            {formik.touched.category && formik.errors.category ? (
                                <p className="error">{formik.errors.category}</p>
                            ) : null}

                            <button
                                className="add-product-btn"
                                type="submit"
                            >
                                Add Product
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Addproduct;


