import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Assessment1 from "./modules/assessment1";
import Assessment2 from "./modules/assessment2";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/assessment1" element={<Assessment1 />} />
            <Route path="/assessment2" element={<Assessment2 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
