import { useNavigate } from "react-router-dom";
import "../defaultPage/index.css";
const NotFound = ()=>{
    const navigate = useNavigate();
    return(
        <>
         <div className="not-found">
            <h1>404</h1>
            <h2>There is no such page</h2>
            <p>The page you are looking for does not exist.</p>

            <button onClick={() => navigate("/home")}>
                Go to Home
            </button>
        </div>
        </>
    )
}
export default NotFound;