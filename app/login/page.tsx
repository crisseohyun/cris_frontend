'use client';

import React from 'react';
import { Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

const LoginComponent = () => {
  const [selectedChurch, setSelectedChurch] = React.useState(new Set(["교회찾기"]));

  const churchOptions = [
    "서현교회",
    "동현교회",
    "북현교회",
    "남현교회",
    "교회찾기",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Chris</h1>
      
      <div className="w-full max-w-md space-y-4">
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              className="w-full justify-between"
            >
              {selectedChurch}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="교회 선택" 
            selectionMode="single" 
            selectedKeys={selectedChurch}
            onSelectionChange={setSelectedChurch}
          >
            {churchOptions.map((church) => (
              <DropdownItem key={church}>{church}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        
        <Input 
          label="로그인" 
          placeholder="jsy0318"
          variant="bordered"
        />
        
        <Input 
          label="비밀번호" 
          placeholder="비밀번호"
          type="password"
          variant="bordered"
        />
        
        <Button color="primary" className="w-full">
          로그인
        </Button>
        
        <Button color="warning" className="w-full">
          카카오로 계속하기
        </Button>
        
        <Button variant="bordered" color="default" className="w-full">
          구글로 계속하기
        </Button>
      </div>
      
      <p className="text-right text-sm mt-4 text-gray-600 w-full max-w-md">
        아이디/비밀번호 찾기
      </p>
    </div>
  );
};

export default LoginComponent;