import { useContext } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import "../profile/index.css";

const Profile=()=>{
    const {user,setUser} = useContext(AuthContext);
    const navigate= useNavigate();
    const handleSignOut=()=>{
     localStorage.removeItem("user");
       setUser(null);
       navigate("/login")
    }
return(
    <>
    <div className="profile-page">
        <div className="profile-card">
            <div className="profile-icon">
                👤
            </div>
            <div className="user-info">
                <p>User's email: {user?.email}</p>
                <p>User's password: ***********</p>
            </div>
            <button className="profile-btn" onClick={()=>handleSignOut()}>Sign-Out</button>
        </div>
    </div>

    </>
)
}
export default Profile;