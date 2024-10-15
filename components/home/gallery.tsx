'use client';

import React from 'react';
import { Card, CardBody, CardFooter, Button } from '@nextui-org/react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

interface GalleryImage {
  src: string;
  alt: string;
  week: string;
  time: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, className }) => (
  <div className={`relative ${className}`}>
    <Button
      isIconOnly
      variant="light"
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background opacity-70 hover:opacity-100"
    >
      <GoArrowLeft size={24} />
    </Button>

    <div className="flex space-x-4 py-8 px-12 overflow-x-auto h-full">
      {images.map((image, index) => (
        <div key={index} className="min-w-[320px]">
          <Card>
            <CardBody className="p-0">
              {image.src ? (
                <img src={image.src} alt={image.alt} className="w-full h-44 object-cover" />
              ) : (
                <div className="w-full h-44 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">이미지 없음</span>
                </div>
              )}
            </CardBody>
            <CardFooter className="flex flex-col items-start">
              <p className="font-bold">{image.week}</p>
              <p className="text-sm text-gray-500">{image.time}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>

    <Button
      isIconOnly
      variant="light"
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background opacity-70 hover:opacity-100"
    >
      <GoArrowRight size={24} />
    </Button>
  </div>
);

export default Gallery;
