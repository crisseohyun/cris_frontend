import React from 'react';
import Image from 'next/image';
import { FiCalendar, FiClock, FiMapPin, FiSun } from 'react-icons/fi';

interface WorshipInfoProps {
  pastorName: string;
  pastorRole: string;
  pastorImageUrl: string;
  mainWorshipTimes: { day: string; time: string }[];
  wednesdayWorshipTime: string;
  fridayWorshipTime: string;
  dawnWorshipTimes: { weekday: string; weekend: string };
}

const WorshipInfo: React.FC<WorshipInfoProps> = ({
  pastorName,
  pastorRole,
  pastorImageUrl,
  mainWorshipTimes,
  wednesdayWorshipTime,
  fridayWorshipTime,
  dawnWorshipTimes,
}) => (
  <div className="grid grid-cols-3 gap-4 p-6">
  
    <div className="col-span-1 bg-white rounded-lg shadow-md p-4 text-center">
      <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
        <Image
          src={pastorImageUrl}
          alt={pastorName}
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <h3 className="font-semibold">{pastorName}</h3>
      <p className="text-sm text-gray-500">{pastorRole}</p>
    </div>

    {/* 예배 */}
    <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
      <h4 className="font-semibold mb-2 flex items-center">
        <FiCalendar className="mr-2" /> 주일예배
      </h4>
      {mainWorshipTimes.map((worship, index) => (
        <p key={index} className="text-sm mb-1">{`${worship.day}: ${worship.time}`}</p>
      ))}
      
      <h4 className="font-semibold mt-4 flex items-center">
        <FiClock className="mr-2" /> 수요예배
      </h4>
      <p className="text-sm">{wednesdayWorshipTime}</p>

      <h4 className="font-semibold mt-4 flex items-center">
        <FiClock className="mr-2" /> 금요예배
      </h4>
      <p className="text-sm">{fridayWorshipTime}</p>

      <h4 className="font-semibold mt-4 flex items-center">
        <FiSun className="mr-2" /> 새벽기도회
      </h4>
      <p className="text-sm">평일 {dawnWorshipTimes.weekday}</p>
      <p className="text-sm">주말 {dawnWorshipTimes.weekend}</p>
    </div>

    {/* 지도 부분 */}
    <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
      <h4 className="font-semibold mb-2 flex items-center">
        <FiMapPin className="mr-2" /> 찾아오시는 길
      </h4>
      <div className="w-full h-40 rounded-lg bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">지도 표시 영역</p>
      </div>
    </div>
  </div>
);

export default WorshipInfo;
