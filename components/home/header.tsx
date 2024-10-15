'use client';

import React from 'react';
import { Navbar, Button } from '@nextui-org/react';
import { FiMenu, FiSettings } from 'react-icons/fi';

interface HeaderProps {
  churchName: string;
  denomination: string;
}

const Header: React.FC<HeaderProps> = ({ churchName, denomination }) => (
  <Navbar className="w-full px-4 py-4">
    {/* 좌측: 메뉴 및 설정 버튼 */}
    <div className="flex items-center space-x-2">
      <Button isIconOnly variant="light" className="text-inherit">
        <FiMenu size={24} />
      </Button>
      <Button isIconOnly variant="light" className="text-inherit">
        <FiSettings size={24} />
      </Button>
    </div>

    {/* 중앙: 교회 이름과 소속 */}
    <div className="flex flex-col items-center">
      <h1 className="font-pretendard text-[24px] md:text-[48px] font-bold leading-[1.2] text-left">
        {churchName}
      </h1>
      <span className="font-source-serif-pro text-sm md:text-[24px] font-normal leading-[1.25] text-left">
        {denomination}
      </span>
    </div>

    {/* 우측: 정수연 버튼 */}
    <div className="flex items-center">
      <Button
        variant="flat"
        color="primary"
        className="px-6 py-2 rounded-full border-t-2 border-r-0 border-b-0 border-l-0"
        style={{ width: '112px', height: '40px' }}
      >
        정수연
      </Button>
    </div>
  </Navbar>
);

export default Header;
