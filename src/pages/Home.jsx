import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Illustration from "../components/IllustrationHeader";

const Menu = () => {
  return (
    <div className="mt-14">
      <div
        className="bg-cover h-screen bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('bandeau-mapitom.jpeg')" }}
      >
        <Nav />
        <div className="flex justify-center items-center h-full">
          <img
            className="h-80 mb-32 sm:mb-0 sm:h-96"
            src="logo-blanc.png"
            alt=""
          />
        </div>
      </div>
      <Illustration />
      <Footer />
    </div>
  );
};

export default Menu;
