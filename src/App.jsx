import Home from "./page/Home/Home";
import About from "./page/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./page/Contacts/Contacts";
import NotFound from "./page/404/404";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
