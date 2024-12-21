import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Register from "./components/Register";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Display from "./components/Page/Display";
import AddPayment from "./components/Page/Addpayment";
import Dashboard from "./components/Page/Dashboard";
import Content from "./components/Content";
import Viewpayment from "./components/Page/Viewpayment";
import Pdfview from "./components/Page/Pdfview";


export default function App() {

  return (
    <div>
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
        <Route exact path="/viewpdf" element={<Pdfview />} />
        </Routes>
      </Router>
    </div>
  )
}
