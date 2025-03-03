import dynamic from 'next/dynamic';
import { FaUsers, FaLeaf, FaClock, FaStethoscope, FaBoxOpen, FaChartLine } from 'react-icons/fa';
import Testimonials from '../components/Testimonials';
import BestProducts from '../components/BestProducts';

const HeroSlider = dynamic(() => import('../components/HeroSlider'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-green-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-green-600 mb-4 flex justify-center">
                <FaUsers size={40} />
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">1000+</h3>
              <p className="text-gray-600">Clients Satisfaits</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-green-600 mb-4 flex justify-center">
                <FaLeaf size={40} />
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">100%</h3>
              <p className="text-gray-600">Produits Naturels</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-green-600 mb-4 flex justify-center">
                <FaClock size={40} />
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">10+</h3>
              <p className="text-gray-600">Années d'Expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-green-600 mb-6 flex justify-center">
                <FaStethoscope size={48} />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">Consultation</h3>
              <p className="text-gray-600 text-center">
                Consultations personnalisées pour évaluer vos besoins en santé
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-green-600 mb-6 flex justify-center">
                <FaBoxOpen size={48} />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">Produits Naturels</h3>
              <p className="text-gray-600 text-center">
                Large gamme de produits naturels pour votre bien-être
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-green-600 mb-6 flex justify-center">
                <FaChartLine size={48} />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">Suivi</h3>
              <p className="text-gray-600 text-center">
                Suivi personnalisé de votre progression
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meilleurs Produits Section */}
      <BestProducts />

      {/* Témoignages Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à améliorer votre santé ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Prendre Rendez-vous
          </button>
        </div>
      </section>
    </div>
  );
}
