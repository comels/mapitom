const incentives = [
  {
    name: "LIVRAISON",
    description:
      "Vos favoris livrés direct chez vous, chauds et prêts à déguster. Parfait pour les soirées cocooning !",
  },
  {
    name: "TRAITEUR",
    description:
      "Rendez vos moments spéciaux délicieux avec notre service traiteur sur-mesure. Pour tous vos événements, petits ou grands !",
  },
  {
    name: "SUR PLACE",
    description:
      "Notre porte est ouverte pour une pause gourmande en solo ou à partager. Ambiance conviviale garantie !",
  },
];

export default function Illustration() {
  return (
    <div className="bg-stone-100">
      <div className="mx-auto max-w-7xl px-10 py-24">
        <div className="mx-auto grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className="flex justify-center text-left lg:text-center"
            >
              <div className="lg:mt-3">
                <h3 className="lg:text-2xl text-xltext-gray-800 tracking-widest">
                  {incentive.name}
                </h3>
                <p className="lg:mt-5 mt-2 mx-auto max-w-sm font-extralight text-gray-600">
                  {incentive.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
