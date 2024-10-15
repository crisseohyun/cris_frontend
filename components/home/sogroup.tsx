'use client';

import React from 'react';
import { Avatar } from '@nextui-org/react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

interface GroupProps {
  id: string;
  name: string;
  imageUrl: string;
  role?: string;
}

interface SogroupProps {
  groups: GroupProps[];
  className?: string;
}

const Sogroup: React.FC<SogroupProps> = ({ groups, className }) => {
  if (!groups || groups.length === 0) return null;

  const groupCount = groups.length;
  const rightArrowLeft = 78 * groupCount + 102; 

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* 소그룹 제목 */}
      <h2
        className="absolute"
        style={{
          fontFamily: 'Source Serif Pro, serif',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '30.07px',
          textAlign: 'left',
          top: '-46px', // 소그룹 제목을 소그룹 동그라미 위로 46px 이동
          left: '0px',   // 소그룹 전체의  왼쪽 끝에 배치
        }}
      >
        소그룹
      </h2>

      {/* 왼쪽 화살표 */}
      <button
        className="absolute"
        style={{
          width: '24px',
          height: '24px',
          top: '39px',    // 동그라미 중앙 (78px / 2)
          left: '-32px',  // 동그라미 왼쪽으로 32px
        }}
        aria-label="Previous Group"
      >
        <GoArrowLeft size={24} />
      </button>

      {/* 동그라미들 */}
      <div className="flex space-x-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="flex flex-col items-center"
          >
            {group.imageUrl ? (
              <Avatar
                src={group.imageUrl}
                className="w-[78px] h-[78px] mb-2"
                isBordered
                color="primary"
              />
            ) : (
              <div className="w-[78px] h-[78px] mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-xs">사진 없음</span>
              </div>
            )}
            <p className="text-sm font-bold">{group.name}</p>
            {group.role && <p className="text-sm text-gray-500">{group.role}</p>}
          </div>
        ))}
      </div>

      {/* 오른쪽 화살표 */}
      <button
        className="absolute"
        style={{
          width: '45px',
          height: '45px',
          top: '0px',                      // 소그룹 타이틀과 같은 높이에 위치
          left: `${rightArrowLeft}px`,     // 마지막 동그라미 오른쪽으로 102px
        }}
        aria-label="Next Group"
      >
        <GoArrowRight size={45} />
      </button>
    </div>
  );
};

export default Sogroup;
