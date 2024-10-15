'use client';

import React from 'react';
import { Card, CardBody, Avatar, Button } from '@nextui-org/react';

interface ProfileProps {
  imageUrl: string;
  name: string;
  role: string;
}

const ProfileNavigation: React.FC<{ profiles: ProfileProps[] }> = ({ profiles }) => (
  <Card className="py-4 px-6">
    <CardBody className="overflow-x-auto">
      <div className="flex space-x-4">
        {profiles.map((profile, index) => (
          <div key={index} className="min-w-[100px] text-center">
            {profile.imageUrl ? (
              <Avatar
                src={profile.imageUrl}
                className="w-20 h-20 mb-2 mx-auto"
                isBordered
                color="primary"
              />
            ) : (
              <div className="w-20 h-20 mb-2 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500">사진 없음</span>
              </div>
            )}
            <p className="text-sm font-bold mb-1">{profile.name}</p>
            <p className="text-xs text-gray-500">{profile.role}</p>
          </div>
        ))}
        <div className="min-w-[100px] text-center">
          <Button
            isIconOnly
            variant="light"
            className="w-20 h-20 mb-2 mx-auto"
          >
            <span className="text-2xl">+</span>
          </Button>
          <p className="text-xs">추가</p>
        </div>
      </div>
    </CardBody>
  </Card>
);

export default ProfileNavigation;
