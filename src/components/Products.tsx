const products = [
  {
    id: 1,
    name: 'Premium Beef Cuts',
    description: 'Hand-selected prime cuts of beef',
    price: '$24.99/kg',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Fresh Chicken',
    description: 'Free-range, locally sourced chicken',
    price: '$7.99/kg',
    image: './chicken.jpg',
  },
  {
    id: 3,
    name: 'Lamb Chops',
    description: 'Tender and juicy lamb chops',
    price: '$29.99/kg',
    image: './lambchops.jpg',
  },
  {
    id: 4,
    name: 'Premium Chicken Cuts',
    description: 'Quality chicken cuts for every occasion',
    price: '$8.99/kg',
    image: './chicken2.jpg',
  },
];

const Products = () => {
  return (
    <div id="products" className="bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Premium Selection
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Choose from our wide variety of premium meats
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition-colors">
              <div className="aspect-w-4 aspect-h-3 rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{product.description}</p>
                <p className="mt-2 text-lg font-semibold text-red-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;