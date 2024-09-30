import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Solarix</h1>
      <div className="flex space-x-4">
        {['clock', 'building', 'chart-bar', 'bell'].map((icon, index) => (
          <div key={index} className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
            <img src={`/icons/${icon}.svg`} alt={icon} className="w-6 h-6" />
          </div>
        ))}
      </div>
    </header>
  );
}; 


export default Header;
