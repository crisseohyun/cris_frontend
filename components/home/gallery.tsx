import React from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: { src: string; alt: string; week: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">예배</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
          <Image src={image.src} alt={image.alt} width={300} height={200} layout="responsive" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            <p className="text-sm">{image.week}</p>
            <button className="mt-1 text-xs bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded">
              더보기
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;