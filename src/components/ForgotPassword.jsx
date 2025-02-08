import NavBar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: ""
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
});

function ForgotPassword() {
  const navigate = useNavigate();
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/forgot-password", values);
      toast.success(response.data.message || "Reset link sent to email");
      resetForm();
      navigate("/login")

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("Failed to send reset link");
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
              <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Forgot Password</h2>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-[#3F51B5] text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition"
                >
                  Send Reset Link
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

export default ForgotPassword;
