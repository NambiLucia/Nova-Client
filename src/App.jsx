import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './components/Hero';
import Register from "./components/Register";

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}
