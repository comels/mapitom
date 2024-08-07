const Footer = () => {
  // Composant Footer : affiche les informations de contact, les horaires et les liens vers les réseaux sociaux
  return (
    <footer className="bg-white px-3 pt-10 pb-5">
      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Section du logo et adresse */}
        <div className="flex flex-col mx-auto">
          <img
            className="h-auto w-32 mx-auto mb-4"
            src="logo.png"
            alt="logo-footer"
          />

          <div className="text-center">
            <a
              href="https://www.google.fr/maps/place/87+Av.+Niel,+75017+Paris/@48.8870698,2.3132678,15z/data=!4m6!3m5!1s0x47e66f96b5ec3e05:0x5c5391edb2ab05e7!8m2!3d48.8835947!4d2.2964306!16s%2Fg%2F11c286360v?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-lg text-gray-800 hover:text-teal-700">
                87 avenue Niel, Paris 75017
              </p>
            </a>
            <p className="text-lg mb-3 justify-center flex gap-2 items-center text-gray-800">
              Métro :{" "}
              <img className="h-4" src="ligne-3.png" alt="logo-metro-ligne-3" />{" "}
              <span className="font-bold">Pereire</span>
            </p>
            <p className="text-lg font-medium">Réserver au</p>
            <a href="tel:0140547105">
              <h2 className="font-bold text-lg mt-2 hover:text-teal-700">
                01 40 54 71 05
              </h2>
            </a>
          </div>
        </div>
        {/* Horaires et contact */}
        <div className="flex flex-col items-center">
          <h2 className="font-medium mb-1">Lundi à Jeudi</h2>
          <p className="text-sm mb-4 text-gray-700">
            11h30 à 15h15 - 18h15 à 22h30
          </p>

          <h2 className="font-medium mb-1">Samedi et Dimanche</h2>
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
      <div className="items-center flex flex-col mt-16">
        <p className="font-light text-gray-800 mb-1 text-xs">
          © Mapitom - Tous droits réservés - 2024{" "}
        </p>
        <p className="font-light text-gray-800 text-xs">
          Réalisé par{" "}
          <a
            href="https://www.linkedin.com/in/comels/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600"
          >
            Côme Le Sauter
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
