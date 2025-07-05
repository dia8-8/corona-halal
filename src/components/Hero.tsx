const Hero = () => {
  return (
    <div id="home" className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="./src/assets/hero.avif"
          alt="Butcher shop"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Premium Quality Meats
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl">
          Discover our selection of viandes corona halal, locally sourced meats, and expert butchery services. 
          From farm to table, we guarantee the finest quality for your dining pleasure.
        </p>
        <div className="mt-10">
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View Our Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;