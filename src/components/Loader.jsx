// Loader.js
import React from 'react';
import loader from '../assets/loader.gif'; // Asegúrate de que la ruta sea correcta

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        src={loader}
        alt="Cargando..."
        className="h-32 w-32" // Descomenta y ajusta el tamaño según sea necesario
      />
      <b className="mt-4 text-lg  text- animate-pulse">Cargando información...</b> 
      </div>
  );
};

export default Loader;
