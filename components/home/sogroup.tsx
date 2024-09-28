import React from 'react';
import Image from 'next/image';
import { GoArrowRight, GoArrowLeft } from "react-icons/go"; // react-icons에서 화살표 아이콘을 임포트

interface GroupProps {
  id: string;
  name: string;
  imageUrl: string;
  role?: string;
}

const GroupNavigation: React.FC<{ groups: GroupProps[] }> = ({ groups }) => (
  <div className="relative my-8">
    {/* 왼쪽 화살표 아이콘 */}
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
      <GoArrowLeft size={24} /> 
    </div>
    
    {/* 소그룹 목록을 가로로 나열 */}
    <div className="flex justify-center space-x-6 py-4 px-12 overflow-x-auto">
      {groups.map((group) => (
        <div key={group.id} className="flex-shrink-0 text-center w-28">
          {/* 소그룹 이미지를 동그라미로 표시 */}
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
            <Image 
              src={group.imageUrl} 
              alt={group.name} 
              width={60} 
              height={60} 
              className="rounded-full"
              unoptimized
            />
          </div>
          {/* 소그룹 이름 */}
          <p className="text-sm font-semibold">{group.name}</p>
          {/* 소그룹 역할 (있을 경우만 표시) */}
          {group.role && <p className="text-xs text-gray-500">{group.role}</p>}
        </div>
      ))}
    </div>
    
    {/* 오른쪽 화살표 아이콘 */}
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
      <GoArrowRight size={24} /> 
    </div>
  </div>
);

export default GroupNavigation;
