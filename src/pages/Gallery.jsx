import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Composant pour l'image
const Image = ({ src, alt }) => (
  <div>
    <img
      className="block h-full w-full rounded-lg object-cover object-center"
      src={src}
      alt={alt}
    />
  </div>
);

const Gallery = () => {
  // Tableau contenant les chemins des images
  const images = Array.from(
    { length: 24 },
    (_, index) => `photo-gallery/photo-${index + 1}.jpeg`
  );

  return (
    <div className="bg-stone-100 mt-20">
      <Nav />
      <div className="m-8 pt-10 md:pt-20 sm:m-12 md:m-16 lg:m-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <Image key={index} src={src} alt="" />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
