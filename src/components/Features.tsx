import { ChefHat, Truck, Clock, Award } from 'lucide-react';

const features = [
  {
    name: 'Expert Butchers',
    description: 'Providing expert cuts and recommendations',
    icon: ChefHat,
  },
  {
    name: 'Home Delivery',
    description: 'Free delivery on orders over $100 within the local area',
    icon: Truck,
  },
  {
    name: 'Fresh Daily',
    description: 'All our meats are fresh and sourced daily from local farms',
    icon: Clock,
  },
  {
    name: 'Premium Quality',
    description: 'We guarantee the highest quality meats for our customers',
    icon: Award,
  },
];

const Features = () => {
  return (
    <div id="features" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            We pride ourselves on quality, service, and expertise
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8 hover:bg-gray-700 transition-colors border border-gray-700">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;