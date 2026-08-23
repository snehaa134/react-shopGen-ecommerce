import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosinstance } from "../../services/api";
import { useState } from "react";
import "../contactPage/contact.css";
import { toast } from "react-toastify";

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            message: ""
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required").matches(/^[A-Za-z]+$/, "Only letters are allowed"),
            lastName: Yup.string().required("Last Name is required").matches(/^[A-Za-z]+$/, "Only letters are allowed"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            age: Yup.number().required("Age is required").min(18, "minimum age is atleast 18"),
            message: Yup.string().required("Message is required").min(10, "Message must be at least 10 characters").max(200, "Message cannot exceed 200 characters")
        }),

        onSubmit: async (values) => {
            try {
                const response = await axiosinstance.post("/users/add", values);
                console.log(response);

                if (response?.status === 201) {
                    console.log(response.data);
                }
                formik.resetForm();
                toast.message("Message Sent Successfully");

            } catch (error) {
                console.log(error);
                toast.error("Something went wrong");
            }
        },
    });

    return (
        <>
            <div className="main-contactt">

                <div className="contact">

                    <form onSubmit={formik.handleSubmit}>
                        <h2>Contact Us</h2>

                        <div className="form-group1">
                            <label>First Name:</label>
                            <input type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className={formik.touched.firstName && formik.errors.firstName ? "input-error" : ""} />
                            {formik.touched.firstName && formik.errors.firstName ? (<p className="error">{formik.errors.firstName}</p>) : null}
                        </div>

                        <div className="form-group1">
                            <label>Last Name:</label>
                            <input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.lastName && formik.errors.lastName ? "input-error" : ""} />
                            {formik.touched.lastName && formik.errors.lastName ? (<p className="error">{formik.errors.lastName}</p>) : null}
                        </div>

                        <div className="form-group1">
                            <label>Email:</label>
                            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? "input-error" : ""} />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="error">{formik.errors.email}</p>
                            ) : null}
                        </div>

                        <div className="form-group1">
                            <label>Age:</label>
                            <input type="number" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.age && formik.errors.age ? "input-error" : ""} />
                            {formik.touched.age && formik.errors.age ? (
                                <p className="error">{formik.errors.age}</p>
                            ) : null}
                        </div>

                        <div className="form-group1">
                            <label>Message:</label>
                            <textarea name="message" rows={4} value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.age && formik.errors.age ? "input-error" : ""}></textarea>
                            {formik.touched.message && formik.errors.message ? (
                                <p className="error">{formik.errors.message}</p>
                            ) : null}
                        </div>

                        <button  className="contact-btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;