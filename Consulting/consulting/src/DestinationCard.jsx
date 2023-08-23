import React from 'react';

const DestinationCard = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-4">
      <img src={imageUrl} alt={name} className="mb-3 rounded-lg" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default DestinationCard;
