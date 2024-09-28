import React from 'react';
import { FiMenu, FiSettings } from 'react-icons/fi';

interface HeaderProps {
  churchName: string;
  denomination: string;
}

const Header: React.FC<HeaderProps> = ({ churchName, denomination }) => (
  <header className="p-4 flex justify-between items-center">
    <div className="flex items-center">
      <FiMenu className="text-2xl text-gray-600 mr-4" />
      <FiSettings className="text-2xl text-gray-600" />
    </div>
    <div className="text-center flex items-baseline">
      <h1 className="text-xl font-bold mr-2">{churchName}</h1>
      <span className="text-sm text-gray-500">{denomination}</span>
    </div>
    <div>
      <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">정수연</button>
    </div>
  </header>
);

export default Header;
