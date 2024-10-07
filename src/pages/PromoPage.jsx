import React from 'react';

const PromoPage = () => {
  // Datos estáticos para la tabla
  const promotions = [
    { id: 1, marca: 'Marca A', medicamento: 'Medicamento 1', precio_venta: '$10.00' },
    { id: 2, marca: 'Marca B', medicamento: 'Medicamento 2', precio_venta: '$15.00' },
    { id: 3, marca: 'Marca C', medicamento: 'Medicamento 3', precio_venta: '$20.00' },
    // Agrega más datos estáticos según sea necesario
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-center text-5xl font-bold mb-6">Promociones</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-bluefb text-white uppercase text-sm">
              <th className="py-3 px-4 border-x-2  text-left">Marca</th>
              <th className="py-3 px-4 border-x-2   text-left">Medicamento</th>
              <th className="py-3 px-4 border-x-2 text-left">Precio de Venta</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promo) => (
              <tr key={promo.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-y-2 border-x-2  text-left">{promo.marca}</td>
                <td className="py-3 px-4 border-y-2 border-x-2  text-left">{promo.medicamento}</td>
                <td className="py-3 px-4 border-y-2  border-x-2text-left">{promo.precio_venta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromoPage;
