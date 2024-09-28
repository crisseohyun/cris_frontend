import React from 'react';

interface BannerProps {
  year: string;
  message: string;
  verse: string;
}

const Banner: React.FC<BannerProps> = ({ year, message, verse }) => (
  <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white rounded-2xl w-full h-72 p-6">
    {/* 교회 표어*/}
    <div className="absolute top-4 left-6 text-sm">{year} 표어</div>

    {/* 배너 메시지(교회 표어) */}
    <h2 className="text-5xl font-bold text-center mx-auto">
      {message.split(' ').map((word, index) => (
        <span key={index} className={index % 2 === 0 ? "text-yellow-400 drop-shadow-md" : "text-white"}>
          {word}{' '}
        </span>
      ))}
    </h2>

    {/* 오른쪽*/}
    <div className="absolute bottom-4 right-6 text-sm">{verse}</div>
  </div>
);

export default Banner;
