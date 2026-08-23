import { useEffect, useState } from "react";
import { axiosinstance } from "../../services/api";
import beauty from "../../assets/images/beauty.png";
import Fragrance from "../../assets/images/Fragrance.jpg";
import furniture from "../../assets/images/furniture.jpg";
import groceries from "../../assets/images/groceries.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import home from "../../assets/images/home.jpg";
import "../category/category.css";
import { Link } from "react-router-dom";
import {useGetCategoriesQuery } from "../../services/productApi/productApiSlice";
const Category = () => {
  // const [category, setCategory] = useState([])
  // const [load, setLoad] = useState(true)

  const {data,isLoading,isError} = useGetCategoriesQuery();
  const category = data
  const categoryImages = [
    beauty,
    Fragrance,
    furniture,
    groceries,
    home,
    kitchen
  ]
  // const getCategories = async () => {
  //   try {
  //     const response = await axiosinstance.get('/products/categories')
  //     console.log(response.data)
  //     if (response?.status === 200) {
  //       setCategory(response.data)
  //       setLoad(false)

  //     }
  //   } catch (error) {
  //     console.log(error)
  //     setLoad(false)
  //   }
  // }
  // useEffect(() => {
  //   getCategories()
  // }, [])
  if (isLoading) {
    return (
      <p>fetching Products data</p>
    )
  }
  if(isError){
    return<p>Something went wrong!</p>
  }

  return (
    <>
      <div className="categories">
        <h2>Shop By Category</h2>
        <div className="category-container">
        {category.slice(0, 6)?.map((category, index) => (
          <div className="category-card" key={category.name}>
            <Link to ={`/category/${category.slug}`}>
              <img src={categoryImages[index]} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
          </div>

        ))}
        </div>
      </div>
    </>
  )
}
export default Category;