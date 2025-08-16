import NavBar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Must be at least 3 characters long")
    .required("Password is required"),
});

function Login() {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "https://nova-server-hk8n.onrender.com/api/v1/users/login",
        values
      );
      const { userToken } = response.data;
      const decodedUserToken = jwtDecode(userToken);

      localStorage.setItem("userToken", userToken);
      localStorage.setItem("userDetails", JSON.stringify(decodedUserToken));

      toast.success("✅ Login successful! Redirecting...");
      resetForm();
      setTimeout(() => navigate("/addpayment"), 1500);
    } catch (error) {
      console.error("Error Logging in:", error.response?.data || error.message);
      toast.error("❌ Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />

      <section className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
        {/* Left Side: Marketing Content */}
        <div className="hidden md:flex w-1/2 flex-col justify-center items-start px-12 bg-[#3F51B5] text-white">
          <h1 className="text-4xl font-extrabold mb-4 leading-snug">
            Join <span className="text-yellow-300">Nova</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-100 max-w-md">
            Create your account in minutes and start streamlining your financial workflows with 
            <span className="font-semibold"> secure</span>, 
            <span className="font-semibold"> smart</span> payment management.
          </p>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex w-full md:w-1/2 justify-center items-center p-8">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
                  Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                  Please log in to continue
                </p>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm py-2.5 px-3 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Password Field */}
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="block w-full rounded-lg border border-gray-300 shadow-sm py-2.5 px-3 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Login Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#3F51B5] text-white py-2.5 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  >
                    Login
                  </button>
                </div>

                {/* Forgot Password & Sign Up Links */}
                <div className="text-center text-sm mt-5 text-gray-600">
                  <Link
                    to="/forgot-password"
                    className="text-[#3F51B5] hover:underline font-medium"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <p className="text-center text-gray-600 text-sm mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-[#3F51B5] hover:underline font-medium"
                  >
                    Sign up here
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
        <ToastContainer />
      </section>

      <Footer />
    </>
  );
}

export default Login;
