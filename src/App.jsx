import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/UI/Header";
import { Footer}  from "./Components/UI/Footer";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Analyzer from "./Components/Pages/Analyzer";
import Features from "./Components/Pages/Features";

const App = () => {
  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features/>} />
        <Route path="/analyzer" element={<Analyzer />} />
      </Routes>

      <Footer />

      </>

  );
};

export default App;
