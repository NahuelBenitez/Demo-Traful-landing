import logo from '../assets/logo.png'

export const AboutPage = () => {
  return (
    <section className='bg-black'>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mx-auto max-w-xl text-center text-3xl font-bold md:text-5xl mb-8 md:mb-12 lg:mb-16 text-white">
          Sobre Nosotros
        </h2>
        {/* Content */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex flex-col gap-6">            
              <div>
                <h3 className="text-xl font-semibold mb-4">
                Bienvenidos a Droguería TRAFUL
                </h3>
                <p className="text-gray-500 max-w-md">
                En Droguería TRAFUL, estamos comprometidos con la salud y el bienestar de nuestra comunidad. Ofrecemos un amplio catálogo de productos farmacéuticos, garantizando calidad y confianza en cada uno de ellos.
                </p>
              </div>
            </div>

            <div className="mt-5 md:mr-5 md:mt-5 pl-5">
              <img
                src={logo}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item */}
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-500">
              Nuestra misión es ser el proveedor líder en el noroeste argentino, brindando a las farmacias un acceso rápido y confiable a productos farmacéuticos de alta calidad. Nos comprometemos a acompañar a nuestros clientes en su crecimiento, ofreciendo un servicio personalizado que responda a sus necesidades específicas y contribuya al bienestar de la comunidad.
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col space-y-4">
            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Nuestra Visión
              </h3>
              <p className="text-gray-500">
              En Droguería TRAFUL, aspiramos a ser reconocidos como el socio preferido de las farmacias en el noroeste argentino. Buscamos innovar constantemente en nuestros procesos y productos, promoviendo la salud y el bienestar en la región, y estableciendo relaciones sólidas y duraderas con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
