import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Example() {
  return (
    <div>
      <Nav />
      <div className="relative mt-14 bg-stone-100 lg:py-14">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            className="h-64 w-full lg:p-10 bg-stone-100 object-cover sm:h-80 lg:absolute lg:h-full"
            src="mapitom-salle.jpeg"
            alt="photo-salle-mapitom"
          />
        </div>
        <div className=" lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
          <div className="px-12 lg:px-8">
            <div className="mx-auto max-w-xl my-10 lg:mx-0 lg:max-w-lg">
              <h2 className="font-extrabold text-gray-800 tracking-tighter mb-3 border-b-2 border-dotted pb-6 border-gray-500 text-5xl sm:text-6xl">
                Contact
              </h2>
              <div className="leading-8">
                <p className="mt-5 font-extralight">
                  Que vous souhaitiez savourer vos plats préférés chez vous,
                  organiser un événement avec un service traiteur personnalisé,
                  ou profiter d&apos;un moment délicieux dans notre restaurant,
                  nous sommes là pour vous.
                </p>
                <h3 className="mt-10 font-extrabold text-gray-800 tracking-tighter">
                  LIVRAISON
                </h3>
                <p className="font-extralight">
                  Vos favoris, directement chez vous. Idéal pour les soirées
                  relax.
                </p>
                <h3 className="mt-5 font-extrabold text-gray-800 tracking-tighter">
                  TRAITEUR
                </h3>
                <p className="font-extralight">
                  Des mets exquis pour rendre vos occasions spéciales
                  inoubliables.
                </p>
                <h3 className="mt-5 font-extrabold text-gray-800 tracking-tighter">
                  SUR PLACE
                </h3>
                <p className="font-extralight">
                  Joignez-vous à nous pour un repas convivial dans une ambiance
                  chaleureuse.
                </p>

                <p className="mt-10 font-extralight">
                  Pour toute réservation, commande ou demande spécifique,
                  n&apos;hésitez pas à nous contacter. Nous sommes ravis de vous
                  accueillir et de faire partie de vos moments gourmands !
                </p>
              </div>

              <dl className="mt-10 space-y-4 text-lg leading-7 text-gray-800">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <PhoneIcon
                      className="h-7 w-6 text-teal-600"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="text-lg text-gray-800 hover:text-teal-700"
                      href="tel:0140547105"
                    >
                      01 40 54 71 05
                    </a>
                  </dd>
                </div>
              </dl>
              <dl className="pb-10 mt-5 space-y-4 text-lg leading-7 text-gray-800">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <MapPinIcon
                      className="h-7 w-6 text-teal-600"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      href="https://www.google.fr/maps/place/87+Av.+Niel,+75017+Paris/@48.8870698,2.3132678,15z/data=!4m6!3m5!1s0x47e66f96b5ec3e05:0x5c5391edb2ab05e7!8m2!3d48.8835947!4d2.2964306!16s%2Fg%2F11c286360v?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-lg text-gray-800 hover:text-teal-700">
                        87 avenue Niel, Paris 75017
                      </p>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
