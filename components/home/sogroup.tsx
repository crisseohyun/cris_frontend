'use client';

import React from 'react';
import { Button, Tooltip, ScrollShadow } from "@nextui-org/react";
import { IoAddCircleOutline } from "react-icons/io5";
import { SlArrowLeftCircle, SlArrowRightCircle, SlOptions } from "react-icons/sl";
import { FaStar } from 'react-icons/fa';

interface GroupProps {
  id: string;
  name: string;
  imageUrl: string;
  role?: string;
  isStarred?: boolean;
}

interface SogroupProps {
  groups: GroupProps[];
  className?: string;
}

const Sogroup: React.FC<SogroupProps> = ({ groups, className }) => {
  if (!groups || groups.length === 0) return null;
  const displayGroups = groups.slice(0, 8);

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center mb-4 absolute top-[-40px] left-0 z-10">
        <h2 className="mr-2" style={{ 
          fontFamily: 'Source Serif Pro, serif',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '30.07px',
          textAlign: 'left'
        }}>
          소그룹
        </h2>
        <Button isIconOnly size="sm" variant="light">
          <IoAddCircleOutline size={24} className="text-gray-500" />
        </Button>
      </div>
      
      <div className="relative">
        <Button isIconOnly size="sm" variant="light" className="absolute left-[-40px] top-[40%] transform -translate-y-1/2 z-10" aria-label="Previous Group">
          <SlArrowLeftCircle size={24} />
        </Button>

        <ScrollShadow className="w-full" size={20}>
          <div className="flex space-x-4 overflow-x-auto py-4 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {displayGroups.map((group) => (
              <div key={group.id} className="flex flex-col items-center min-w-[90px] relative">
                <div className="w-[90px] h-[90px] rounded-full bg-gray-200 mb-2 relative">
                  {group.imageUrl && (
                    <img src={group.imageUrl} alt={group.name} className="w-full h-full object-cover rounded-full" />
                  )}
                  <Tooltip content={group.isStarred ? "즐겨찾기 제거" : "즐겨찾기 추가"}>
                    <Button isIconOnly size="sm" variant="light" className="absolute bottom-0 right-0 p-0">
                      <FaStar 
                        size={30} 
                        className={`${group.isStarred ? 'text-yellow-400' : 'text-white'}`}
                        style={{ 
                          strokeWidth: group.isStarred ? 0 : 30,
                          stroke: '#666',
                          filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,0.3))'
                        }}
                      />
                    </Button>
                  </Tooltip>
                </div>
                <p className="text-sm font-bold text-center">{group.name}</p>
                {group.role && <p className="text-xs text-gray-500 text-center">{group.role}</p>}
              </div>
            ))}
            
            <div className="flex flex-col items-center min-w-[90px]">
              <Button isIconOnly size="lg" variant="flat" className="w-[90px] h-[90px] mb-2 rounded-full">
                <SlOptions size={24} />
              </Button>
              <p className="text-xs text-gray-500">추가</p>
            </div>
          </div>
        </ScrollShadow>

        <Button isIconOnly size="sm" variant="light" className="absolute right-[-40px] top-[40%] transform -translate-y-1/2 z-10" aria-label="Next Group">
          <SlArrowRightCircle size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Sogroup;