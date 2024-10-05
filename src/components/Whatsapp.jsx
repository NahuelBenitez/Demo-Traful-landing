// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = '1234567890'; // Reemplaza con el número de WhatsApp deseado

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors duration-300 hover:bg-green-600 z-50"
      onClick={handleClick}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Icono de WhatsApp
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </button>
  );
};

export default WhatsAppButton;
