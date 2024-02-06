import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <div className="bg-stone-100">
        <Nav />
      <div className="m-8 sm:m-12 md:m-16 lg:m-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-1.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-2.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-3.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-4.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-5.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-6.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-7.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-8.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-9.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-10.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-11.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="photo-gallery/photo-12.jpeg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
