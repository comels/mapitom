import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto z-10 bg-white flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5 focus:outline-none">
            <img className="h-10 sm:h-12" src="logo.png" alt="" />
          </NavLink>
        </div>
        {/* Logo menu burger pour mobile */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Menu principal */}
        <Popover.Group className="hidden md:flex items-center md:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            ></Transition>
          </Popover>
          <NavLink
            to="/"
            className="text-lg font-extralight leading-6 text-gray-900 hover:text-teal-700 hover:font-normal"
          >
            accueil
          </NavLink>

          <NavLink
            to="/menu"
            className="text-lg font-extralight leading-6 text-gray-900 hover:text-teal-700 hover:font-normal"
          >
            menu
          </NavLink>
          <NavLink
            to="/galerie"
            className="text-lg font-extralight leading-6 text-gray-900 hover:text-teal-700 hover:font-normal"
          >
            photos
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg font-extralight leading-6 text-gray-900 hover:text-teal-700 hover:font-normal"
          >
            contact
          </NavLink>
          <a
            className="text-lg font-extralight leading-6 text-gray-900 hover:text-teal-700 hover:font-normal"
            href="https://deliveroo.fr/fr/menu/paris/courcelles-wagram/mapitom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-14" src="deliveroo-nav.png" alt="" />
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5 focus:outline-none">
              <img className="h-10" src="logo.png" alt="" />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-teal-600/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Accueil
                </NavLink>

                <NavLink
                  to="/menu"
                  className="-mx-3 block rounded-lg px-3 py-2 font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/galerie"
                  className="-mx-3 block rounded-lg px-3 py-2 font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Photos
                </NavLink>
                <NavLink
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </NavLink>
              </div>
              <div className="py-6">
                <div className="flex gap-6 justify-center">
                  <a
                    href="https://www.instagram.com/mapitomparis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-10"
                      src="instagram.jpeg"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d19451347-Reviews-Mapitom-Paris_Ile_de_France.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="h-10" src="tripadvisor.png" alt="" />
                  </a>
                  <a
                    href="https://www.facebook.com/mapitom.paris17"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="h-10" src="facebook.svg" alt="Facebook" />
                  </a>
                  <a
                    href="https://deliveroo.fr/fr/menu/paris/courcelles-wagram/mapitom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="h-10" src="deliveroo.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navigation;
