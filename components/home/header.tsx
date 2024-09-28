import React from 'react';
import { FiMenu, FiSettings } from 'react-icons/fi';

const Header: React.FC<{ churchName: string }> = ({ churchName }) => (
  <header className="bg-white dark:bg-darkBackground shadow-sm p-4 flex justify-between items-center">
    <div className="flex items-center">
      <FiMenu className="text-2xl mr-4 text-secondary dark:text-white" />
      <h1 className="text-xl font-semibold text-primary dark:text-darkPrimary">{churchName}</h1>
      <span className="ml-2 text-sm text-secondary dark:text-gray-400">대한예수교장로회</span>
    </div>
    <div className="flex items-center">
      <FiSettings className="text-2xl mr-4 text-secondary dark:text-white" />
      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
    </div>
  </header>
);

export default Header;