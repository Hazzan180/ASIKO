import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Router from "../../Routers/Router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layer = () => {
  const location = useLocation(); // Get current route

  return (
    <>
      {/* Hide Header only on AZCL page */}
      {location.pathname !== "/azcl" && <Header />}

      <div>
        <Router />
      </div>

      <Footer />
    </>
  );
};

export default Layer;
