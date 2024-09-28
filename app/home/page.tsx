import React from 'react';
import Header from '../../components/home/header';
import Banner from '../../components/home/Banner';
import WorshipInfo from '../../components/home/worshipinfo';
import GroupNavigation from '../../components/home/sogroup';
import Gallery from '../../components/home/gallery';

const ChurchHome: React.FC = () => {
  // 소그룹 정보 (고등부, 찬양대 등)
  const groups = [
    { id: '1', name: '여름수련회준비', imageUrl: '/images/group1.jpg', role:'총무' },
    { id: '2', name: '가브리엘', imageUrl: '/images/group2.jpg', role: '3부찬양대 싱어' },
    { id: '3', name: '더드림', imageUrl: '/images/group3.jpg', role: '3부찬양대 싱어' },
    { id: '4', name: '중등부', imageUrl: '/images/group4.jpg', role:"인도자" },
    { id: '5', name: '믿음마을', imageUrl: '/images/group5.jpg', role:"리더" },
    { id: '6', name: '믿음마을임원', imageUrl: '/images/group6.jpg', role:"총무" },
    { id: '7', name: '추가', imageUrl: '/images/add.jpg' },
  ];

  // 예배 사진 갤러리 정보
  const galleryImages = [
    { src: '/images/worship1.jpg', alt: '1주 예배', week: '1주 예배', time: '오전 9:55 시작' },
    { src: '/images/worship2.jpg', alt: '2주 예배', week: '2주 예배', time: '오전 11:55 시작' },
    { src: '/images/worship3.jpg', alt: '3주 예배', week: '3주 예배', time: '오전 9:55 시작' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 헤더: 교회 이름과 교단 정보 표시 */}
      <Header churchName="서현교회" denomination="대한예수교장로회" />

      <main className="container mx-auto px-4 py-6">
        {/* 배너 섹션: 교회 표어 및 성경 구절 표시 */}
        <Banner year="2024" message="소망은 주께 있나이다" verse="시 39:7" />

        {/* 담임 목사님 정보 및 예배 시간 정보 */}
        <div className="my-8">
          <WorshipInfo
            pastorName="이상화 목사님"
            pastorRole="서현교회 담임목사님"
            pastorImageUrl="/images/pastor.jpg"
            mainWorshipTimes={[
              { day: '1부 예배', time: '오전 9:55' },
              { day: '2부 예배', time: '오전 11:55' },
              { day: '3부 예배', time: '오후 1:30' },
              { day: '주일오후예배', time: '오후 3:20' },
            ]}
            wednesdayWorshipTime="오후 7:30"
            fridayWorshipTime="오후 7:30"
            dawnWorshipTimes={{ weekday: '오전 5:30', weekend: '오전 6:00' }}
          />
        </div>

        {/* 소그룹 네비게이션 섹션 */}
        <GroupNavigation groups={groups} />

        {/* 예배 갤러리 섹션 */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            예배
            {/* 더보기 버튼 */}
            <button className="ml-2 text-sm bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">+</button>
          </h2>
          {/* 예배 사진 갤러리 */}
          <Gallery images={galleryImages} />
        </div>
      </main>
    </div>
  );
};

export default ChurchHome;
