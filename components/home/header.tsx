'use client';

import React from 'react';
import { Navbar, Button } from '@nextui-org/react';
import { FiMenu, FiSettings } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

interface HeaderProps {
  churchName: string;
  denomination: string;
}

const Header: React.FC<HeaderProps> = ({ churchName, denomination }) => (
  <Navbar className="w-full px-4 py-4 flex items-center">
    {/* 좌측: 메뉴하고 설정 버튼 */}
    <div className="flex items-center ml-[-96px]">
      <Button isIconOnly variant="light" className="text-inherit">
        <FiMenu size={24} />
      </Button>
      <Button isIconOnly variant="light" className="text-inherit">
        <FiSettings size={24} />
      </Button>
    </div>

    {/* 교회 이름, 소속 */}
    <div className="flex-1 flex items-center justify-center">
      <h1 className="font-pretendard text-[24px] md:text-[48px] font-bold leading-[1.2] text-center whitespace-nowrap">
        {churchName}
      </h1>
      <span className="font-source-serif-pro text-sm md:text-[24px] font-normal leading-[1.25] text-center ml-2 whitespace-nowrap">
        {denomination}
      </span>
    </div>

    {/* 회원 정보 버튼 */}
    <div className="flex items-center mr-[-120px]">
      <Button
        variant="flat"
        className="rounded-full border-t-2 border-r-0 border-b-0 border-l-0 flex items-center justify-center bg-black text-white"
        style={{ width: '112px', height: '40px' }}
      >
        <FaUserCircle
          className="mr-2"
          style={{ width: '36px', height: '40px' }}
        />
        <span>정수연</span>
      </Button>
    </div>
  </Navbar>
);

export default Header;
