import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { starters, sides, veges, streets, plats, sweets } from "../data/menu";

const MenuCategory = ({ title, items }) => (
  <div className="my-6 border-b-2 border-dotted pb-6  border-gray-500">
    <h2 className="text-3xl text-teal-600 font-extrabold tracking-tighter mt-6 mb-4">
      {title}
    </h2>
    {items.map((item, index) => (
      <div key={index} className="flex justify-between mb-3">
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600 font-light">{item.description}</p>
        </div>
        <span className="text-sm font-bold">{item.price}€</span>
      </div>
    ))}
  </div>
);

const MenuColumn = ({ categories }) => (
  <div className="mx-6">
    {categories.map((category, index) => (
      <MenuCategory key={index} title={category.title} items={category.items} />
    ))}
  </div>
);

const Menu = () => {
  const colonne1 = [
    { title: "Starters", items: starters },
    { title: "Sides", items: sides },
    { title: "Vegetarian", items: veges },
  ];

  const colonne2 = [
    { title: "Street food", items: streets },
    { title: "Big plates", items: plats },
    { title: "Sweet", items: sweets },
  ];

  return (
    <div className="bg-stone-100">
      <Nav />
      <div className="max-w-6xl my-20 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-extrabold pt-10 text-gray-800 tracking-tighter mx-6 mb-3 border-b-2 border-dotted pb-6 border-gray-500 text-5xl sm:text-7xl">
          Menu
        </h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <MenuColumn categories={colonne1} />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <MenuColumn categories={colonne2} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
