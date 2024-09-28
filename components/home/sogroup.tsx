import React from 'react';
import Image from 'next/image';

interface GroupProps {
  id: string;
  name: string;
  imageUrl: string;
}

const GroupNavigation: React.FC<{ groups: GroupProps[] }> = ({ groups }) => (
  <div className="flex overflow-x-auto space-x-4 py-4 px-4 bg-white">
    {groups.map((group) => (
      <div key={group.id} className="flex-shrink-0 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full mx-auto mb-2 p-0.5">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <Image src={group.imageUrl} alt={group.name} width={70} height={70} className="rounded-full" />
          </div>
        </div>
        <p className="text-xs">{group.name}</p>
      </div>
    ))}
    <div className="flex-shrink-0">
      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2">
        <span className="text-3xl text-gray-400">+</span>
      </div>
      <p className="text-xs">추가</p>
    </div>
  </div>
);

export default GroupNavigation;