import React from 'react';

const MainContent = ({ title, description1, description2, image }) => {
  return (
    <div className="w-full px-4 py-8" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)' }}>
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-green-800">{title}</h2>
          <p className="mb-4 text-lg text-gray-600">
            {description1}
          </p>
          <p className="text-lg text-gray-600">
            {description2}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <img src={image} alt="Solar Panels" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
