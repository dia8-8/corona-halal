import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Visit our shop or reach out to us
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-colors">
            <MapPin className="h-8 w-8 text-red-400" />
            <h3 className="mt-4 text-lg font-medium text-white">Location</h3>
            <p className="mt-2 text-base text-gray-300 text-center">
              2910 Rue Fleury E<br />
              Montreal, QC H2B 1M4
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-colors">
            <Clock className="h-8 w-8 text-red-400" />
            <h3 className="mt-4 text-lg font-medium text-white">Hours</h3>
            <p className="mt-2 text-base text-gray-300 text-center">
              Monday - Friday: 8am - 7pm<br />
              Saturday: 8am - 5pm<br />
              Sunday: Closed
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-colors">
            <Phone className="h-8 w-8 text-red-400" />
            <h3 className="mt-4 text-lg font-medium text-white">Contact</h3>
            <p className="mt-2 text-base text-gray-300 text-center">
              Phone: (514) 303-9282<br />
              Email: viandescorona@outlook.com
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gray-700 p-4 rounded-lg">
            <iframe
              title="map"
              className="w-full h-96 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.17838429701!2d-73.64442199999999!3d45.57895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f4721a78bcf%3A0xb013aa5813eb5c31!2sViandes%20Corona%20(halal)!5e1!3m2!1sen!2sca!4v1748135819336!5m2!1sen!2sca"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;