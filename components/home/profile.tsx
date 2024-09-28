import React from 'react';
import Image from 'next/image';

interface ProfileProps {
  imageUrl: string;
  name: string;
  role: string;
}

const ProfileNavigation: React.FC<{ profiles: ProfileProps[] }> = ({ profiles }) => (
  <div className="flex overflow-x-auto space-x-4 py-4 px-4 bg-white rounded-lg shadow-md">
    {profiles.map((profile, index) => (
      <div key={index} className="flex-shrink-0 text-center w-24">
        <Image 
          src={profile.imageUrl} 
          alt={profile.name} 
          width={80} 
          height={80} 
          className="rounded-full mx-auto mb-2"
        />
        <p className="text-sm font-medium truncate">{profile.name}</p>
        <p className="text-xs text-gray-500 truncate">{profile.role}</p>
      </div>
    ))}
    
    {/* 소그룹 프로필 추가 */}
    <div className="flex-shrink-0 w-24">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
        <span className="text-2xl text-gray-400">+</span>
      </div>
      <p className="text-xs text-center">추가</p>
    </div>
  </div>
);

export default ProfileNavigation;
