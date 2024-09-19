import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import PageNotFound from "./assets/Page Not Found/PageNotFound";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Skillls from "./assets/components/Skillls";
import Projects from "./assets/components/Projects";
import ThemeContextProvider from "./assets/context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skillls />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
