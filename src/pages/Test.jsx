import React from "react";

const Test = () => {
  return (
    <div>
      <div id="gallery" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          /
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
