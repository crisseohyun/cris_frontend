'use client';

import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import { PastorInfo, WorshipTimes, OtherInfo } from '../../components/home/WorshipInfo';
import Sogroup from '../../components/home/Sogroup';
import Gallery from '../../components/home/Gallery';
/*후에 백앤드에서 데이터 받아오기*/
const ChurchHome: React.FC = () => {
  const groups = [
    { id: '1', name: '여름수련회준비', imageUrl: '', role: '총무', isStarred: true },
    { id: '2', name: '가브리엘', imageUrl: '', role: '테너', isStarred: false },
    { id: '3', name: '더드림', imageUrl: '', role: '싱어', isStarred: true },
    { id: '4', name: '중등부', imageUrl: '', role: '인도자', isStarred: false },
    { id: '5', name: '믿음마을', imageUrl: '', role: '리더', isStarred: true },
    { id: '6', name: '믿음마을임원', imageUrl: '', role: '총무', isStarred: false },
    { id: '7', name: '찐큐티', imageUrl: '', role: '신도', isStarred: true },
    { id: '8', name: '학사', imageUrl: '', role: '학사생', isStarred: false },
    { id: '9', name: '크리스', imageUrl: '', role: '개발', isStarred: true },
    { id: '10', name: '고등부', imageUrl: '', role: '목사', isStarred: false },
  ];

  const galleryImages = [
    { src: '', alt: '1부 예배', section: '1부 예배', time: '오전 9:55 시작' },
    { src: '', alt: '2부 예배', section: '2부 예배', time: '오전 11:55 시작' },
    { src: '', alt: '3부 예배', section: '3부 예배', time: '오전 9:55 시작' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center relative">
      <Header churchName="서현교회" denomination="대한예수교장로회" />

      {/* 헤더와 배너 사이 간격을 30px로 설정, 현재 배너 크기가 원래 디자인 크기에 맞고 나머지를 배너에 맞춰야 함 */}
      <Banner
        year="2024"
        message="소망은 주께 있나이다"
        verse="시 39:7"
        className="w-[1037px] h-[214px] mt-[30px] rounded-tl-[30px]"
      />

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mt-8 w-full max-w-[996px] px-4">
        <PastorInfo
          pastorName="이상화 목사님"
          pastorRole="서현교회 담임목사님"
          pastorImageUrl=""
          className=""
          nameStyle="text-[16px] font-bold mb-1 text-[#303030]"
          roleStyle="text-[12px] text-[#525252]"
          imageStyle="w-[93px] h-[92px] rounded-full object-cover"
        />

        <WorshipTimes
          mainWorshipTimes={[
            { day: '1부 예배', time: '오전 9:55' },
            { day: '2부 예배', time: '오전 11:55' },
            { day: '3부 예배', time: '오후 1:30' },
            { day: '주일오후예배', time: '오후 3:20' },
          ]}
          wednesdayWorshipTimes={[
            { part: '1부', time: '수요정오(직장인) 12:00' },
            { part: '2부', time: '수요저녁 7:30' },
          ]}
          className=""
        />

        <OtherInfo
          locationUrl=""
          className=""
        />
      </div>

      <div className="w-full max-w-[996px] px-4 mt-16">
        <Sogroup
          groups={groups}
          className="flex justify-center"
        />
      </div>

      {/* 소그룹과 갤러리 사이 간격 설정 */}
      <div className="w-full max-w-[996px] px-4 mt-[30px]">
        <Gallery
          images={galleryImages}
          className="w-full h-[243px]"
        />
      </div>
    </div>
  );
};

export default ChurchHome;
