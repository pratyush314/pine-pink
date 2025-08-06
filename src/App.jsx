import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </MaxWidthWrapper>
    </>
  );
};

export default App;
