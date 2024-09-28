import React from 'react';

interface BannerProps {
  year: string;
  message: string;
  verse: string;
}

const Banner: React.FC<BannerProps> = ({ year, message, verse }) => (
  <div className="bg-green-700 text-white p-6 rounded-lg">
    <div className="text-sm mb-2">{year} 표어</div>
    <h2 className="text-2xl font-bold mb-2 text-yellow-300">{message}</h2>
    <div className="text-right text-sm">{verse}</div>
  </div>
);

export default Banner;