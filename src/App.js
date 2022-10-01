import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Pages/Start/Start";
import ThePinkDove from "./Pages/ThePinkDove/ThePinkDove";
import About from "./Pages/About/About";
import Site from "./Pages/Site/Site";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" exact element={<Start />} />
          <Route path="/thepinkdove" element={<ThePinkDove />} />
          <Route path="/contact" element={<About />} />
          <Route path="/site/:site" element={<Site />} />
        </Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}