'use client';

import React, { useState, useEffect } from 'react';
import { Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import dynamic from 'next/dynamic';

// 동적으로 지도 컴포넌트 import (SSR 방지)
const Map = dynamic(() => import('../../components/Map'), { ssr: false }); //향후 구현

const LoginComponent = () => {
  const [selectedChurch, setSelectedChurch] = useState<string>("교회찾기");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [churchOptions, setChurchOptions] = useState<string[]>([]);
  const [mapCenter, setMapCenter] = useState({ lat: 37.5665, lng: 126.9780 }); // 서울 중심 좌표
  const router = useRouter();

  useEffect(() => {
    if (searchTerm) {
      searchChurches(searchTerm);
    }
  }, [searchTerm]);

  const searchChurches = async (term: string) => {
    try {
      const response = await axios.get(`http://your-fastapi-url/search-churches?term=${term}`);
      setChurchOptions(response.data.churches);
    } catch (error) {
      console.error("교회 검색 실패", error);
      alert('교회 검색에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleChurchSelect = (church: string) => {
    setSelectedChurch(church);
    // 여기서 선택된 교회의 좌표를 가져와 지도 중심을 변경
    // 예시: getChurchCoordinates(church).then(coords => setMapCenter(coords));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-fastapi-url/login', {
        email,
        password,
        church: selectedChurch
      });
      
      if (response.data.success) {
        alert('로그인 성공!');
        // 여기에 토큰을 저장. 예: localStorage.setItem('token', response.data.token);
        router.push('/');
      } else {
        alert(response.data.message || '로그인 실패. 아이디와 비밀번호를 확인하세요');
      }
    } catch (error) {
      console.error("로그인 실패", error);
      alert('로그인 실패. 서버 오류가 발생했습니다.');
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get('http://your-fastapi-url/google-login');
      window.location.href = response.data.auth_url;
    } catch (error) {
      console.error("구글 로그인 실패", error);
      alert('구글 로그인 실패. 다시 시도해주세요');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Chris</h1>
      
      <div className="w-full max-w-md space-y-4">
        <Input 
          label="교회 검색" 
          placeholder="교회 이름을 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
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
            selectedKeys={new Set([selectedChurch])}
            onSelectionChange={(keys) => handleChurchSelect(Array.from(keys)[0] as string)}
          >
            {churchOptions.map((church) => (
              <DropdownItem key={church}>{church}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        
        <div className="w-full h-64">
          <Map center={mapCenter} />
        </div>
        
        <Input 
          label="이메일" 
          placeholder="example@email.com"
          variant="bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Input 
          label="비밀번호" 
          placeholder="비밀번호"
          type="password"
          variant="bordered"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button color="primary" className="w-full" onClick={handleLogin}>
          로그인
        </Button>
        
        <Button color="warning" className="w-full">
          카카오로 계속하기
        </Button>
        
        <Button variant="bordered" color="default" className="w-full" onClick={handleGoogleLogin}>
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