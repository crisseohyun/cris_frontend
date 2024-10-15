'use client';

import React from 'react';
import { Card, CardBody } from '@nextui-org/react';

interface BannerProps {
  year: string;
  message: string;
  verse: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ year, message, verse, className }) => (
  <Card
    className={`bg-gradient-to-r from-blue-500 to-purple-500 text-center rounded-tl-[30px] ${className}`}
  >
    <CardBody className="flex flex-col justify-center items-center h-full gap-0">
      <h2 className="text-2xl text-white">{year}</h2>
      <h3 className="text-xl text-white mt-2">{message}</h3>
      <p className="text-white mt-2 italic">{verse}</p>
    </CardBody>
  </Card>
);

export default Banner;
