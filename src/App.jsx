import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Pages/Landing/Sections/Hero/Hero.jsx";
import Features from "./components/Pages/Landing/Sections/Feature/Features.jsx";
import Testimonials from "./components/Pages/Landing/Sections/Testimonials/index.jsx";
import FAQSection from "./components/Pages/Landing/Sections/FAQSection/index.jsx";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/Pages/Landing/PopUpCookie/index.jsx";
import PrivacyPolicy from "./components/Pages/Landing/Pages/Privacy/index.jsx";
import BackToTopButton from "./components/layout/BackToTopButton";
import Login from "./components/Pages/Login/index.jsx";
import CriarConta from "./components/Pages/CriarConta/index.jsx";
import Icar from "./components/Pages/Plataform/Main/index.jsx";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); 

  return (
    <div className="min-h-screen">
      {location.pathname == "/"  && <Navbar />}
      {location.pathname == "/nossas-politicas"  && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Features />
              <Testimonials />
              <FAQSection />
            </div>
          }
        />
        <Route
          path="/nossas-politicas"
          element={
            <div>
              <PrivacyPolicy />
            </div>
          }
        />
        <Route
          path="/entrar"
          element={
            <div>
              <Login />
            </div>
          }
        />

        <Route
          path="/criar-conta"
          element={
            <div>
              <CriarConta />
            </div>
          }
        />

        <Route
          path="/icar"
          element={
            <div>
              <Icar />
            </div>
          }
        />
      </Routes>

      {location.pathname != "/icar"  && <Footer />}

      {location.pathname != "/icar"  &&   <CookieConsent />}

      {location.pathname != "/icar"  &&   <BackToTopButton />}
    
    </div>
  );
}

export default App;
