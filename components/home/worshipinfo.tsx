'use client';

import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { FiCalendar, FiClock, FiSun, FiMapPin } from 'react-icons/fi';

interface WorshipTimesProps {
  mainWorshipTimes: { day: string; time: string }[];
  wednesdayWorshipTime: string;
  fridayWorshipTime: string;
  dawnWorshipTimes: { weekday: string; weekend: string };
  className?: string;
}

export const WorshipTimes: React.FC<WorshipTimesProps> = ({
  mainWorshipTimes,
  wednesdayWorshipTime,
  fridayWorshipTime,
  dawnWorshipTimes,
  className,
}) => (
  <Card className={`p-6 w-[384px] h-[214px] ${className}`}>
    <CardBody>
      <div className="space-y-4">
        <div>
          <h4 className="flex items-center text-lg font-semibold">
            <FiCalendar className="mr-2" />
            주일예배
          </h4>
          <ul className="mt-2 space-y-1">
            {mainWorshipTimes.map((worship, index) => (
              <li key={index} className="text-sm">
                {`${worship.day}: ${worship.time}`}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="flex items-center text-lg font-semibold">
            <FiClock className="mr-2" />
            수요예배
          </h4>
          <p className="text-sm mt-1">{wednesdayWorshipTime}</p>
        </div>
        <div>
          <h4 className="flex items-center text-lg font-semibold">
            <FiClock className="mr-2" />
            금요예배
          </h4>
          <p className="text-sm mt-1">{fridayWorshipTime}</p>
        </div>
        <div>
          <h4 className="flex items-center text-lg font-semibold">
            <FiSun className="mr-2" />
            새벽기도회
          </h4>
          <p className="text-sm mt-1">평일 {dawnWorshipTimes.weekday}</p>
          <p className="text-sm">주말 {dawnWorshipTimes.weekend}</p>
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
}

export const PastorInfo: React.FC<PastorInfoProps> = ({
  pastorName,
  pastorRole,
  pastorImageUrl,
  className,
}) => (
  <Card className={`bg-blue-50 p-6 text-center w-[180px] h-[214px] ${className}`}>
    <CardBody className="flex flex-col justify-center items-center h-full">
      {pastorImageUrl ? (
        <img
          src={pastorImageUrl}
          alt={`${pastorName} 프로필`}
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
      ) : (
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500">사진 없음</span>
        </div>
      )}
      <h3 className="text-xl font-semibold mt-4">{pastorName}</h3>
      <p className="text-gray-500">{pastorRole}</p>
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
