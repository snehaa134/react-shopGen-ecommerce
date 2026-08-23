
import { useFormik } from "formik";
import * as Yup from "yup";
import "../login/index.css";
import {useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { useContext } from "react";
import { toast } from "react-toastify";

const Login = () => {
    const {setUser} = useContext(AuthContext);
    const navigate= useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email("Enter a valid email")
                .required("Email is required"),

            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required")
        }),

        onSubmit: (values) => {
            console.log(values);
            localStorage.setItem("user",JSON.stringify(values));
            setUser(values)
            formik.resetForm();
            toast.success("Login Successfull")
            navigate('/home')
        }
    });

    return (
        <div className="login-pagee">
            <div className="login-boxx">

                <h2>Welcome Back</h2>
                <p className="login-text">Login to your account</p>

                <form onSubmit={formik.handleSubmit}>

                    <div className="login-group">
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.email &&
                            formik.errors.email ? (
                            <p className="login-error">
                                {formik.errors.email}
                            </p>
                        ) : null}
                    </div>

                    <div className="login-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.password &&
                            formik.errors.password ? (
                            <p className="login-error">
                                {formik.errors.password}
                            </p>
                        ) : null}
                    </div>

                   <button 
                        className="login-btnn"
             type="submit" 
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Login;

