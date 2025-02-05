import NavBar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const initialValues = {
  email: "",
  password: ""
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  password: Yup.string()
    .min(3, "Must be at least 3 characters long")
    .required("Password is Required")
});

function Login() {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/login", values);
      const { userToken } = response.data;
      const decodedUserToken = jwtDecode(userToken);

      console.log("Decoded User:", decodedUserToken);

      localStorage.setItem('userToken', userToken);
      localStorage.setItem('userDetails', JSON.stringify(decodedUserToken));

      toast.success("Login successful! Redirecting to Dashboard...");
      resetForm();
      setTimeout(() => navigate('/addpayment'), 1000);
    } catch (error) {
      console.error("Error Logging in:", error.response?.data || error.message);
      toast.error("Error logging in");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      
      {/* Background Styling */}
      <section className="flex justify-center items-center min-h-screen bg-[#F3F4F6] p-6">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {() => (
            <Form className="w-full max-w-md p-6 bg-white shadow-2xl rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Login</h2>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 mt-2">Email</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 mt-2">Password</label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Login Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-[#3F51B5] text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition"
                >
                  Login
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-gray-600 text-sm mt-4">
                No account? <Link to="/register" className="text-[#3F51B5] hover:underline">Sign up here</Link>
              </p>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </section>

      <Footer />
    </>
  );
}

export default Login;
