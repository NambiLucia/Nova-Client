import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home"

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}
