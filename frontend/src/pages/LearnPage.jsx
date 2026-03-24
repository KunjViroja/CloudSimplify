import React, { useEffect, useState } from 'react';
import { getServices } from '../services/api';
import ServiceCard from '../components/ServiceCard';
import { Loader2 } from 'lucide-react';

const LearnPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const categories = ['All', ...new Set(services.map(s => s.category))];
  
  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            AWS Services Glossary
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A beginner-friendly breakdown of core AWS services. Learn what they do, when to use them, and when to look elsewhere.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Filter Bar */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No services found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnPage;
