'use client';

import React from 'react';
import { Card, Button, Divider } from "@nextui-org/react";
import { FaEdit, FaHome, FaSignInAlt, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 to-purple-100">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-xl">
        <h1 className="text-center text-3xl font-bold mb-6">Welcome to Chris app</h1>
        
        <Button
          href="/editor"
          as="a"
          color="primary"
          size="lg"
          startContent={<FaEdit />}
          className="w-full"
        >
          에디터
        </Button>

        <Button
          href="./home"
          as="a"
          color="secondary"
          size="lg"
          startContent={<FaHome />}
          className="w-full"
        >
          홈
        </Button>

        <Button
          href="./login"
          as="a"
          color="success"
          size="lg"
          startContent={<FaSignInAlt />}
          className="w-full"
        >
          로그인화면
        </Button>

        <Divider className="my-4" />
        
        <Card className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6">
          <div className="flex justify-center mb-2">
            <FaQuoteLeft className="text-indigo-500 mr-2" />
            <FaQuoteRight className="text-purple-500 ml-2" />
          </div>
          <p className="text-center text-gray-700 font-serif italic">
            엘룰월 이십오일, 오십이일 간에 걸친 성 수축 공사가 끝났다. 이 소식은 우리의 모든 원수들의 귀에 들어갔고, 우리 주위에 살던 뭇 민족들은 이 일을 눈으로 보고 매우 놀랐다. 그들은 그제야 이 일을 이룩하신 이가 다름 아닌 우리 하느님이심을 알게 되었다.
          </p>
          <p className="text-right text-sm mt-4 text-gray-600">- 느헤미야 6:15-16</p>
        </Card>
      </Card>
    </main>
  );
}