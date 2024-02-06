import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Menu = () => {
  return (
    <div>
      <div
        className="bg-cover h-screen bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('bandeau-mapitom.jpeg')" }}
      >
        <Nav />
        <div className="flex justify-center items-center h-full">
          <img className="h-96" src="logo-blanc.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
