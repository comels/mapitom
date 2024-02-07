import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Example() {
  return (
    <div>
      <Nav />
      <div className="relative bg-stone-100 lg:py-14">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            className="h-64 w-full lg:p-10 bg-stone-100 object-cover sm:h-80 lg:absolute lg:h-full"
            src="mapitom-salle.jpeg"
            alt=""
          />
        </div>
        <div className="lg:py-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl my-10 lg:mx-0 lg:max-w-lg">
              <h2 className="sm:text-3xl text-2xl font-bold tracking-tight text-teal-600">
                Contact
              </h2>
              <p className="mt-2 sm:text-lg leading-8 text-gray-600">
                Si vous avez des questions, souhaitez effectuer une réservation
                ou planifier un événement tel qu'un anniversaire ou une réunion
                privée, n'hésitez pas à nous contacter ou à nous rendre visite
                au{" "}
                <a
                  href="https://www.google.fr/maps/place/87+Av.+Niel,+75017+Paris/@48.8870698,2.3132678,15z/data=!4m6!3m5!1s0x47e66f96b5ec3e05:0x5c5391edb2ab05e7!8m2!3d48.8835947!4d2.2964306!16s%2Fg%2F11c286360v?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold text-teal-600">
                    87 avenue Niel, Paris 17e.
                  </span>
                </a>
              </p>

              <dl className="py-10 space-y-4 text-lg leading-7 text-gray-800">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <PhoneIcon
                      className="h-7 w-6 text-teal-600"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="text-gray-800 font-light"
                      href="tel:0140547105"
                    >
                      01 40 54 71 05
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
