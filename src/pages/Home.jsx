import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Illustration from "../components/IllustrationHeader";
import Nav from "../components/Nav";

const Menu = () => {
  return (
    <div className="mt-14">
      <div
        className="bg-cover h-screen bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('bandeau-mapitom.jpeg')" }}
      >
        <Nav />
        <div className="flex flex-col justify-center items-center h-full">
          <img
            className="h-80 mb-32 sm:mb-0 sm:h-96"
            src="logo-blanc.png"
            alt=""
          />
          <Link
            to="/menu"
            className="rounded-lg py-3 px-10 bg-white sm:hidden text-gray-800 tracking-widest"
          >
            MENU
          </Link>
        </div>
      </div>
      <Illustration />
      <Footer />
    </div>
  );
};

export default Menu;
