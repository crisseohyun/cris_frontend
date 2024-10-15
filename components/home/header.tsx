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
    {/* 좌측: 메뉴하고 설정 버튼입니 */}
    <div className="flex items-center space-x-2">
      <Button isIconOnly variant="light" className="text-inherit">
        <FiMenu size={24} />
      </Button>
      <Button isIconOnly variant="light" className="text-inherit">
        <FiSettings size={24} />
      </Button>
    </div>

    {/* 교회 이름하고 소속, 아직 로고는 못 넣었음 */}
    <div className="flex items-center">
      <h1 className="font-pretendard text-[24px] md:text-[48px] font-bold leading-[1.2] text-left whitespace-nowrap">
        {churchName}
      </h1>
      <span className="font-source-serif-pro text-sm md:text-[24px] font-normal leading-[1.25] text-left ml-2 whitespace-nowrap">
        {denomination}
      </span>
    </div>

    {/* 회원 정보 버튼인데 아직 아이콘은 못 넣음 */}
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
