import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const starters = [
  {
    name: "Houmous classic",
    price: 10.5,
    description: "Pois chiche, tahini, citron et zaatar.",
  },
  {
    name: "Houmous du moment",
    price: 10.5,
    description: "Selon l'humeur de la cheffe.",
  },
  {
    name: "Houmous bassar",
    price: 14.5,
    description: "Pois chiche, tahini, citron, zaatar, viande de boeuf",
  },
  {
    name: "Labneh selon l'humeur de la cheffe",
    price: 13,
    description: "Fromage libanais, chutney, zaatar et pistache.",
  },
  {
    name: "Pita truffe fromage",
    price: 11,
    description: "Pita, truffe et fromage fondu",
  },
  {
    name: "Pita labneh miel pignon",
    price: 10.5,
    description: "Pita, labneh, miel et pignon.",
  },
  {
    name: "Trio de degustation",
    price: 14.5,
    description: "Petit houmous, petit labneh et salade israélienne.",
  },
];
const veges = [
  {
    name: "Aubergine",
    price: 10.5,
    description:
      "Tahini, piment, coriandre, miel de datte, grenade, cébette, pickles.",
  },
  {
    name: "Patate douce",
    price: 14.5,
    description: "Tahini, grenade, datte, féta, noisette, cébette, pickles.",
  },
  {
    name: "Chou-fleur",
    price: 13,
    description:
      "Lait de coco, beurre de cacahuète, curry rouge, grenade et noisettes.",
  },
  {
    name: "Ratatouille",
    price: 11,
    description: "Aubergine, tomate, piment, coriandre, tahini, oeuf mollet.",
  },
  {
    name: "Velouté du moment",
    price: 10.5,
    description: "Selon l'humeur de la cheffe.",
  },
];
const plats = [
  {
    name: "Assiette colorée",
    price: 16,
    description:
      "Houmous, aubergine, patate douce, oeuf poché, chou rouge/carotte, tahini, cébette, oignon rouge.",
  },
  {
    name: "Assiette du jardin",
    price: 17,
    description:
      "Salade romaine, olive, féta, grenade, oignon rouge, pois chiche, concombre, tomate.",
  },
  {
    name: "Salade Shemesh",
    price: 18,
    description:
      "Lait de coco, beurre de cacahuète, curry rouge, grenade et noisettes.",
  },
  {
    name: "Assiette Schnitzel",
    price: 17,
    description:
      "Poulet pané (K) , tomate, concombre, houmous, choux rouge/carotte.",
  },
  {
    name: "Assiette Shawarma",
    price: 18,
    description:
      "Chicken Shawarma, houmous, patate douce, cébette et coriandre.",
  },
  {
    name: "Rosbeef",
    price: 18,
    description:
      "Viande de bœuf (K), câpres, piment, tahini et chutney de tomates.",
  },
  {
    name: "Tataki de thon",
    price: 18,
    description: "Thon snacké, sauce satai, cacahuète, cébette, piment.",
  },
];
const sides = [
  {
    name: "Salade de tomate-feta",
    price: 7,
    description: "Tomates, féta, cébette et sumac.",
  },
  {
    name: "Salade israelienne",
    price: 6,
    description:
      "Tomate, concombre, grenade, oignon rouge, citron, huile d'olive, zaatar.",
  },
  {
    name: "Pomme de terre",
    price: 6,
    description: "Yoghurt, tahini, ciboulette.",
  },
  {
    name: "Jericho beans",
    price: 7,
    description: "Haricots, oignons, épices.",
  },
];
const streets = [
  {
    name: "Pita Schnitzel",
    price: 16.5,
    description: "Poulet pané (K), tomates, concombre aubergine, tahini.",
  },
  {
    name: "Pita Veggie",
    price: 16.5,
    description:
      "Chou-fleur rôti, tahini, coriandre. tomate/concombre, piment.",
  },
  {
    name: "Pita Chicken Shawarma",
    price: 16,
    description: "Tomate/concombre, tahini, aubergine, coriandre, piment.",
  },
];
const sweets = [
  {
    name: "La babka de B",
    price: 8.5,
    description: "Brioche tressée et fourrée selon l'humeur de la cheffe.",
  },
  {
    name: "Crumble déstructuré",
    price: 9.5,
    description:
      "Yaourt, crumble, miel, fruits de saison, menthe, zeste de citron vert.",
  },
  {
    name: "Carpaccio d'ananas d'oranger",
    price: 8.5,
    description: "Ananas, orange, menthe, zeste de citron vert.",
  },
];

const MenuCategory = ({ title, items }) => (
  <div className="my-6 border-b-2 border-dotted pb-6  border-gray-500">
    <h2 className="text-3xl  text-teal-700 font-extrabold tracking-tighter mt-6 mb-4">
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
      <div className="max-w-6xl my-10 sm:my-20 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-extrabold tracking-tighter mx-6 mb-3 border-b-2 border-dotted pb-6 border-gray-500 text-5xl sm:text-7xl">
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

{
  /* <div className="flex flex-col items-center mx-auto px-10">
          <h1 className="text-4xl font-bold mt-10">Nos plats végétariens</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {veges.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex flex-col"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700 font-bold">{item.price}€</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mx-auto px-10">
          <h1 className="text-4xl font-bold mt-10">Nos plats</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {plats.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex flex-col"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700 font-bold">{item.price}€</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mx-auto px-10">
          <h1 className="text-4xl font-bold mt-10">Nos accompagnements</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sides.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex flex-col"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700 font-bold">{item.price}€</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mx-auto px-10">
          <h1 className="text-4xl font-bold mt-10">Nos plats de rue</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {streets.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex flex-col"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700 font-bold">{item.price}€</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mx-auto px-10">
          <h1 className="text-4xl font-bold mt-10">Nos desserts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sweets.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex flex-col"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700 font-bold">{item.price}€</p>
              </div>
            ))}
          </div>
        </div> */
}
