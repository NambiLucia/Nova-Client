import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Register from "./components/Register";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Display from "./components/Page/Display";

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/display" element={<Display />} />
        </Routes>
      </Router>
    </div>
  )
}
