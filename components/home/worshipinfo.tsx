import React from 'react';
import Image from 'next/image';
import { FiCalendar, FiClock, FiMapPin, FiSun } from 'react-icons/fi';

interface WorshipInfoProps {
  pastorName: string;
  pastorImageUrl: string;
  mainWorshipTime: string;
  wednesdayWorshipTime: string;
}

const WorshipInfo: React.FC<WorshipInfoProps> = ({
  pastorName,
  pastorImageUrl,
  mainWorshipTime,
  wednesdayWorshipTime,
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center mb-4">
      <Image src={pastorImageUrl} alt={pastorName} width={60} height={60} className="rounded-full mr-4" />
      <div>
        <h3 className="font-semibold">{pastorName}</h3>
        <p className="text-sm text-gray-500">담임목사</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="flex items-center text-sm mb-1"><FiCalendar className="mr-2" /> 주일예배</p>
        <p className="text-sm">{mainWorshipTime}</p>
      </div>
      <div>
        <p className="flex items-center text-sm mb-1"><FiClock className="mr-2" /> 수요예배</p>
        <p className="text-sm">{wednesdayWorshipTime}</p>
      </div>
      <div>
        <p className="flex items-center text-sm mb-1"><FiMapPin className="mr-2" /> 오시는 길</p>
        <p className="text-sm text-blue-500">지도 보기</p>
      </div>
      <div>
        <p className="flex items-center text-sm mb-1"><FiSun className="mr-2" /> 새벽기도회</p>
        <p className="text-sm">오전 05:30</p>
      </div>
    </div>
  </div>
);

export default WorshipInfo;