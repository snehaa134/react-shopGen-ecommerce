import { useEffect, useState } from "react";
import { axiosinstance } from "../../services/api";


const Practice = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [load, setLoad] = useState(true);

    const getCategoryList = async () => {
        try {
            const response = await axiosinstance.get('/products/category-list')
            console.log(response)
            if(response?.status===200){
                setLoad(false)
                setCategoryList(response.data)
                console.log(response.data)
            }
        } catch (error) {
                console.log(error)
                setLoad(false)
        }
    }
    useEffect(()=>{
        getCategoryList()
    },[])
    return (
        <>
       {categoryList?.map((item)=>{
         <div key={item}>
             <p>{item}</p>
         </div>
       })}
        </>
    )
}
export default Practice;