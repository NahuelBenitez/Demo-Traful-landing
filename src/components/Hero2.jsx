import pfizer from '../assets/pfizer.png';
import bayer from '../assets/bayer.png';
import bago from '../assets/bago.png';
import elea from '../assets/elea.png';
import biotenk from '../assets/biotenk.jpeg';

export const Hero2 = () => {
  return (
    <header className="py-10 bg-gradient-to-b from-blue-500 to-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl md:text-6xl text-white">
            Droguería TRAFUL
          </h1>
          <p className="mb-6 text-sm text-black sm:text-xl lg:mb-8">
            En Droguería TRAFUL, somos tu socio estratégico en el noroeste argentino. Ofrecemos una amplia gama de productos farmacéuticos y un servicio de atención personalizado, para que tu farmacia pueda brindar siempre lo mejor a sus clientes.
          </p>
          <a
            href="#"
            className="mr-6 inline-block items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white lg:mr-8 hover:opacity-85 transition-all duration-200"
          >
            Solicitar Información
          </a>
        </div>
        <ul className="mt-16 grid gap-8 sm:mt-24 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-4">
          <li>
            <img src={pfizer} alt="Pfizer" className="h-32 " />
          </li>
          <li>
            <img src={bayer} alt="Bayer" className="h-32 " />
          </li>
          <li>
            <img src={bago} alt="Bago" className="h-32 " />
          </li>
          <li>
            <img src={elea} alt="Elea" className="h-32 " />
          </li>
          <li>
            <img src={biotenk} alt="Biotenk" className="h-32 " />
          </li>
        </ul>
      </div>
    </header>
  );
};
