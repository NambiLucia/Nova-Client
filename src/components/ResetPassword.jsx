//import { useState } from "react";
import NavBar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSearchParams, useNavigate } from "react-router-dom";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Get token directly from the URL
  
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/users/reset-password`, 
        {
          resetToken: token, // Using token from URL
          newPassword: values.password,
        }
      );
      toast.success(response.data.message || "Password successfully reset");
      navigate("/login"); // Redirect to login after successful password reset
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("Failed to reset password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
     <NavBar />
      <section className="flex justify-center items-center min-h-screen bg-[#F3F4F6] p-6">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {() => (
            <Form className="w-full max-w-md p-6 bg-white shadow-2xl rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Reset Password</h2>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your new password"
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

             
              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-[#3F51B5] text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition"
                >
                  Reset Password
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </section>
      <Footer />
    </>
  );
}

export default ResetPassword;
