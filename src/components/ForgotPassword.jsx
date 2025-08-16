import NavBar from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

function ForgotPassword() {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "https://nova-server-hk8n.onrender.com/api/v1/users/forgot-password",
        values
      );

      toast.success("✅ Reset link sent to your email");
      const token = response.data.token;
      localStorage.setItem("resetToken", token);
      resetForm();

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "❌ Failed to send reset link"
      );
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
            Reset Your Password 🔑
          </h1>
          <p className="text-lg leading-relaxed text-gray-100 max-w-md">
            Forgot your credentials? Don’t worry — enter your email and we’ll
            send you a secure link to reset your password and get back on track
            with <span className="font-semibold">Nova</span>.
          </p>
        </div>

        {/* Right Side: Forgot Password Form */}
        <div className="flex w-full md:w-1/2 justify-center items-center p-8">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
                  Forgot Password
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                  Enter your email address and we’ll send you a reset link
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

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#3F51B5] text-white py-2.5 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  >
                    Send Reset Link
                  </button>
                </div>

                {/* Back to Login */}
                <p className="text-center text-gray-600 text-sm mt-5">
                  Remember your password?{" "}
                  <Link
                    to="/login"
                    className="text-[#3F51B5] hover:underline font-medium"
                  >
                    Back to Login
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

export default ForgotPassword;
