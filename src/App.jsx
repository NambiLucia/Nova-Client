import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//import Register from "./components/Register";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Display from "./components/Page/Display";
import AddPayment from "./components/Page/Addpayment";
import Dashboard from "./components/Page/Dashboard";
import Approve from "./components/Page/Approve";
import Content from "./components/Content";
import Viewpayment from "./components/Page/Viewpayment";
import Pdfview from "./components/Page/Pdfview";
import About from "./components/About";
import Guide from "./components/Guide";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";




export default function App() {

  return (
    <div>
       <ToastContainer />
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/display" element={<Display />} />
        <Route exact path="/addpayment" element={<AddPayment />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/viewpayment" element={<Viewpayment />} />
        <Route exact path="/viewpdf/:paymentId" element={<Pdfview />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/guide" element={<Guide />} />
        <Route exact path="/approve" element={<Approve />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  )
}
