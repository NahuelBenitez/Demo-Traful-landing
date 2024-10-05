// Navbar2.jsx
import { useState } from 'react';

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Sobre Nosotros', href: '#' },
  { name: 'Servicios', href: '#' },
  { name: 'Contacto', href: '#' },
];

export const Navbar2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bluefb">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <span className="text-white text-lg font-semibold">Drogueria TRAFUL</span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            {/* Icono de menú (puedes agregar un SVG aquí) */}
            <span className="h-6 w-6">☰</span> 
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
           <a
           key={item.name}
           href={item.href}
           className="text-sm font-semibold leading-6 text-white transition-colors duration-300 hover:text-green-700 hover:underline"
         >
           {item.name}
         </a>
         
          ))}
        </div>
      </nav>
      {/* Menú móvil simple (puedes personalizarlo) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black opacity-30" onClick={() => setMobileMenuOpen(false)} />
      )}
      {mobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-900 text-lg font-semibold">Drogueria TRAFUL</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              {/* Icono de cerrar (puedes agregar un SVG aquí) */}
              <span className="h-6 w-6 duration-300">✖</span>
            </button>
          </div>
          <div className="mt-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
