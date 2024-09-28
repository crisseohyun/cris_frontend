import React from 'react';
import Image from 'next/image';
import { GoArrowRight, GoArrowLeft } from "react-icons/go"; // react-icons에서 화살표 아이콘 임포트

interface GalleryImage {
  src: string;
  alt: string;
  week: string;
  time: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className="relative">
    {/* 왼쪽 화살표 아이콘 */}
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
      <GoArrowLeft size={24} /> {/* GoArrowLeft 아이콘 */}
    </div>
    
    <div className="flex justify-between space-x-4 overflow-x-auto px-4">
      {images.map((image, index) => (
        <div key={index} className="flex-shrink-0 w-80 relative">
          <Image 
            src={image.src} 
            alt={image.alt} 
            width={320} 
            height={180} 
            className="rounded-lg"
            unoptimized
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
            <p className="text-sm font-semibold">{image.week}</p>
            <p className="text-xs">{image.time}</p>
          </div>
          <button className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">더보기</button>
        </div>
      ))}
    </div>
    
    {/* 오른쪽 화살표 아이콘 */}
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
      <GoArrowRight size={24} /> {/* GoArrowRight 아이콘 */}
    </div>
  </div>
);

export default Gallery;
