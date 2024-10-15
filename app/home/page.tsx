'use client';

import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import { PastorInfo, WorshipTimes, OtherInfo } from '../../components/home/WorshipInfo';
import Sogroup from '../../components/home/Sogroup';
import Gallery from '../../components/home/Gallery';

const ChurchHome: React.FC = () => {
  const groups = [
    { id: '1', name: '여름수련회준비', imageUrl: '', role: '총무' },
    { id: '2', name: '가브리엘', imageUrl: '', role: '테너' },
    { id: '3', name: '더드림', imageUrl: '', role: '싱어' },
    { id: '4', name: '중등부', imageUrl: '', role: '인도자' },
    { id: '5', name: '믿음마을', imageUrl: '', role: '리더' },
    { id: '6', name: '믿음마을임원', imageUrl: '', role: '총무' },
    { id: '7', name: '찐큐티', imageUrl: '', role: '신도' },
    { id: '8', name: '학사', imageUrl: '', role: '학사생' },
    { id: '9', name: '크리스', imageUrl: '', role: '개발' },
    { id: '10', name: '고등부', imageUrl: '', role: '목사' },
  ];

  const galleryImages = [
    { src: '', alt: '1주 예배', week: '1주 예배', time: '오전 9:55 시작' },
    { src: '', alt: '2주 예배', week: '2주 예배', time: '오전 11:55 시작' },
    { src: '', alt: '3주 예배', week: '3주 예배', time: '오전 9:55 시작' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center relative">
      <Header churchName="서현교회" denomination="대한예수교장로회" />

      {/* 배너 */}
      <Banner
        year="2024"
        message="소망은 주께 있나이다"
        verse="시 39:7"
        className="w-[996px] h-[214px] mt-16 rounded-tl-[30px]"
      />

      {/* 목사님 프로필, 예배 정보, 찾아오시는 길 */}
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mt-8 w-full max-w-[996px] px-4">
        <PastorInfo
          pastorName="이상화 목사님"
          pastorRole="서현교회 담임목사님"
          pastorImageUrl=""
          className=""
        />

        <WorshipTimes
          mainWorshipTimes={[
            { day: '1부 예배', time: '오전 9:55' },
            { day: '2부 예배', time: '오전 11:55' },
            { day: '3부 예배', time: '오후 1:30' },
            { day: '주일오후예배', time: '오후 3:20' },
          ]}
          wednesdayWorshipTime="오후 7:30"
          fridayWorshipTime="오후 7:30"
          dawnWorshipTimes={{ weekday: '오전 5:30', weekend: '오전 6:00' }}
          className=""
        />

        <OtherInfo
          locationUrl=""
          className=""
        />
      </div>

      {/* 소그룹 동그라미들 */}
      <div className="w-full max-w-[996px] px-4 mt-16">
        <Sogroup
          groups={groups}
          className="flex justify-center"
        />
      </div>

      {/* 예배 갤러리 */}
      <div className="w-full max-w-[996px] px-4 mt-16">
        <Gallery
          images={galleryImages}
          className="w-full h-[243px]"
        />
      </div>
    </div>
  );
};

export default ChurchHome;
