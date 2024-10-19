'use client';

import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

interface WorshipTimesProps {
  mainWorshipTimes: { day: string; time: string }[];
  wednesdayWorshipTimes: { part: string; time: string }[];
  className?: string;
}

export const WorshipTimes: React.FC<WorshipTimesProps> = ({
  mainWorshipTimes,
  wednesdayWorshipTimes,
  className,
}) => (
  <Card className={`w-[368px] h-[211px] ${className}`}>
    <CardBody className="p-0 relative bg-white rounded-[30px] overflow-hidden">
      <div className="flex h-full">
        {/* 주일예배 섹션 */}
        <div className="flex-1 p-4">
          <div className="flex items-center mb-4">
            <FiCalendar className="w-5 h-5 mr-2 text-black" />
            <span className="font-semibold text-[14px] text-black">주일예배</span>
          </div>
          <div className="space-y-1">
            {mainWorshipTimes.map((worship, index) => (
              <div key={index} className="text-[12px] text-[#353535]">
                {`${worship.day}- ${worship.time}`}
              </div>
            ))}
          </div>
        </div>

        {/* 중앙 구분선 */}
        <div className="w-[1px] bg-[#E5E5E5] h-full" />

        {/* 주중예배 섹션 */}
        <div className="flex-1 p-4">
          <div className="flex items-center mb-4">
            <FiClock className="w-5 h-5 mr-2 text-black" />
            <span className="font-semibold text-[14px] text-black">주중예배</span>
          </div>
          <div className="space-y-1">
            {wednesdayWorshipTimes.map((worship, index) => (
              <div key={index} className="text-[12px] text-[#353535]">
                {`${worship.part}- ${worship.time}`}
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
);

interface PastorInfoProps {
  pastorName: string;
  pastorRole: string;
  pastorImageUrl: string;
  className?: string;
  nameStyle?: string;
  roleStyle?: string;
  imageStyle?: string;
}

export const PastorInfo: React.FC<PastorInfoProps> = ({
  pastorName,
  pastorRole,
  pastorImageUrl,
  className,
  nameStyle = "text-[16px] font-bold mb-1 text-[#303030]",
  roleStyle = "text-[12px] text-[#525252]",
  imageStyle = "w-[93px] h-[92px] rounded-full object-cover",
}) => (
  <Card className={`bg-blue-50 p-6 text-center w-[180px] h-[214px] ${className}`}>
    <CardBody className="flex flex-col justify-center items-center h-full">
      {pastorImageUrl ? (
        <img
          src={pastorImageUrl}
          alt={`${pastorName} 프로필`}
          className={`${imageStyle} mb-2`}
        />
      ) : (
        <div className={`${imageStyle} bg-gray-200 flex items-center justify-center mb-2`}>
          <span className="text-gray-500">사진 없음</span>
        </div>
      )}
      <h3 className={nameStyle}>{pastorName}</h3>
      <p className={roleStyle}>{pastorRole}</p>
    </CardBody>
  </Card>
);

interface OtherInfoProps {
  locationUrl: string;
  className?: string;
}

export const OtherInfo: React.FC<OtherInfoProps> = ({ locationUrl, className }) => (
  <Card className={`p-6 w-[384px] h-[214px] border-t border-gray-300 ${className}`}>
    <CardBody>
      <h4 className="flex items-center text-lg font-semibold">
        <FiMapPin className="mr-2" />
        찾아오시는 길
      </h4>
      <div className="mt-4">
        {locationUrl ? (
          <img src={locationUrl} alt="Map" className="w-full h-auto" />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">지도 없음</span>
          </div>
        )}
      </div>
    </CardBody>
  </Card>
);