'use client';

import React from 'react';
import { Avatar } from '@nextui-org/react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

interface GroupProps {
  id: string;
  name: string;
  imageUrl: string;
  role?: string;
}

interface SogroupProps {
  groups: GroupProps[];
  className?: string;
}

const Sogroup: React.FC<SogroupProps> = ({ groups, className }) => (
  <div className={`relative flex items-center ${className}`}>
    {/* 좌측 화살표 버튼 */}
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 opacity-70 hover:opacity-100 p-2 rounded-full"
      aria-label="Left"
    >
      <GoArrowLeft size={24} />
    </button>

    {/* 동그라미들 컨테이너 */}
    <div className="flex space-x-4 overflow-x-auto px-8">
      {groups.slice(0, 10).map((group) => (
        <div key={group.id} className="flex flex-col items-center">
          {group.imageUrl ? (
            <Avatar
              src={group.imageUrl}
              className="w-[78px] h-[78px] mb-2"
              isBordered
              color="primary"
            />
          ) : (
            <div className="w-[78px] h-[78px] mb-2 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">사진 없음</span>
            </div>
          )}
          <p className="text-sm font-bold">{group.name}</p>
          {group.role && <p className="text-sm text-gray-500">{group.role}</p>}
        </div>
      ))}
    </div>

    {/* 우측 화살표 버튼 */}
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 opacity-70 hover:opacity-100 p-2 rounded-full"
      aria-label="Right"
    >
      <GoArrowRight size={24} />
    </button>
  </div>
);

export default Sogroup;
