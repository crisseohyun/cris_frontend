'use client';

import React from 'react';
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { IoAddCircleOutline } from "react-icons/io5";

interface GalleryImage {
  src: string;
  alt: string;
  section: string;
  time: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, className }) => (
  <div className={`relative ${className}`} style={{ width: '1035px' }}>
    <div className="flex items-center mb-2">
      <h2 className="text-2xl font-normal mr-2" style={{ 
        fontFamily: 'Source Serif Pro, serif',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '30.07px',
        textAlign: 'left'
      }}>
        예배
      </h2>
      <Button isIconOnly size="sm" variant="light">
        <IoAddCircleOutline size={24} className="text-gray-500" />
      </Button>
    </div>

    <div className="flex justify-between relative">
      {images.slice(0, 3).map((image, index) => (
        <Card key={index} className="w-[325px] h-[243px]" style={{
          backgroundImage: 'linear-gradient(139.55deg, rgba(255, 255, 255, 0.2) 5.88%, rgba(255, 255, 255, 0) 93.44%)',
          backgroundClip: 'padding-box',
          border: '1px solid transparent',
          borderImageSlice: 1,
          borderWidth: '1px 0 0 0',
        }}>
          <CardBody className="p-0 overflow-hidden">
            {image.src ? (
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">이미지 없음</span>
              </div>
            )}
          </CardBody>
          <CardFooter className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white">
            <div className="flex flex-col w-full">
              <p className="font-bold text-lg">{image.section}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm">{image.time}</p>
                <Button size="sm" color="primary">더보기</Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}

      <Button 
        isIconOnly
        variant="light"
        className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2" 
        style={{ marginLeft: '-27px' }}
        aria-label="Previous Image"
      >
        <SlArrowLeftCircle size={24} />
      </Button>

      <Button 
        isIconOnly
        variant="light"
        className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2" 
        style={{ marginRight: '-27px' }}
        aria-label="Next Image"
      >
        <SlArrowRightCircle size={24} />
      </Button>
    </div>
  </div>
);

export default Gallery;