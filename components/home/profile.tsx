import React from 'react';
import Image from 'next/image';

interface ProfileProps {
  imageUrl: string;
  name: string;
  role: string;
}

const ProfileNavigation: React.FC<{ profiles: ProfileProps[] }> = ({ profiles }) => (
  <div className="flex overflow-x-auto space-x-4 py-4 px-4 bg-white">
    {profiles.map((profile, index) => (
      <div key={index} className="flex-shrink-0 text-center w-20">
        <Image 
          src={profile.imageUrl} 
          alt={profile.name} 
          width={60} 
          height={60} 
          className="mx-auto mb-1"
        />
        <p className="text-xs font-medium truncate">{profile.name}</p>
        <p className="text-xs text-gray-500 truncate">{profile.role}</p>
      </div>
    ))}
    <div className="flex-shrink-0 w-20">
      <div className="w-15 h-15 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-1">
        <span className="text-2xl text-gray-400">+</span>
      </div>
      <p className="text-xs">추가</p>
    </div>
  </div>
);

export default ProfileNavigation;