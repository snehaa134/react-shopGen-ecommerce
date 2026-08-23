import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute =()=>{
    const {user}= useContext(AuthContext)
    if(user){
        return <Navigate to="/profile" replace/>
    }
    return <Outlet/>
 
}
export default PublicRoute;