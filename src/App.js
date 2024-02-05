import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Link to="/Home">Navigate to Home Page</Link>
      <br />
      <Link to="/About">Navigate About Page</Link>
    </div>
  );
}

export default App;
