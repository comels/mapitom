const Footer = () => {
  // Composant Footer : affiche les informations de contact, les horaires et les liens vers les réseaux sociaux
  return (
    <footer className="bg-white px-3 pt-10 pb-5">
      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Section du logo et adresse */}
        <div className="flex flex-col mx-auto">
          <h1 className="font-extrabold text-gray-800 text-center mb-2 text-3xl tracking-tighter">
            Mapitom
          </h1>

          <div className="text-center">
            <a
              href="https://www.google.fr/maps/place/87+Av.+Niel,+75017+Paris/@48.8870698,2.3132678,15z/data=!4m6!3m5!1s0x47e66f96b5ec3e05:0x5c5391edb2ab05e7!8m2!3d48.8835947!4d2.2964306!16s%2Fg%2F11c286360v?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-base text-gray-800">
                87 avenue Niel, Paris 75017
              </p>
            </a>
            <p className="text-base mb-3 justify-center flex gap-2 items-center text-gray-800">
              Métro : <img className="h-4" src="ligne-3.png" alt="" />{" "}
              <span className="font-bold">Pereire</span>
            </p>
            <a href="tel:+33142949672">
              <h2 className="font-medium mt-5 bg-teal-700 text-white p-2 rounded-xl">
                01 42 63 83 29
              </h2>
            </a>
          </div>
        </div>
        {/* Horaires et contact */}
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-base mb-1">Du Lundi au Jeudi</h2>
          <p className="text-sm mb-4 text-gray-700">
            11h30 à 15h15 - 18h15 à 22h30
          </p>

          <h2 className="font-semibold text-base mb-1">
            Le Samedi et Dimanche
          </h2>
          <p className="text-sm text-gray-700">11h30 à 16h00 - 18h30 à 22h30</p>
        </div>
        {/* Liens vers les réseaux sociaux et partenaires */}
        <div className="flex mx-auto gap-6 items-center">
          <a
            href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d19451347-Reviews-Mapitom-Paris_Ile_de_France.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10" src="tripadvisor.png" alt="TripAdvisor" />
          </a>
          <a
            href="https://www.facebook.com/mapitom.paris17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10" src="facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/mapitomparis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10" src="instagram.jpeg" alt="Instagram" />
          </a>
          <a
            href="https://deliveroo.fr/fr/menu/paris/courcelles-wagram/mapitom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10" src="deliveroo.png" alt="Deliveroo" />
          </a>
        </div>
      </div>
      <p className="text-center mt-16 font-light text-gray-800 text-xs">
        Copyright © 2024 -{" "}
        <a
          href="https://www.linkedin.com/in/comels/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-normal"
        >
          Côme Le Sauter
        </a>{" "}
        - développeur web
      </p>
    </footer>
  );
};

export default Footer;
