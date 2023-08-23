import React from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
    {
        name: 'Hawaii, US State',
        description: 'Relax on stunning beaches and explore rich culture.',
        imageUrl: '../src/assets/img/Hawaii.jpg',
      },
  {
    name: 'Bali, Indonesia',
    description: 'Relax on stunning beaches and explore rich culture.',
    imageUrl: '../src/assets/img/Bali.jpg',
  },
  {
    name: 'Paris, France',
    description: 'Experience the charm of the City of Love.',
    imageUrl: '../src/assets/img/Paris.jpg',
  },

];

const Destinations = () => {
    return (
        <section className="bg-gray-100 py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Popular Destinations</h2>
            <p className="text-gray-600 mb-8">
              Explore some of the most amazing travel destinations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <DestinationCard key={index} {...destination} />
              ))}
            </div>
          </div>
        </section>
      );
    };
    

export default Destinations;
