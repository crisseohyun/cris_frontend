import React from 'react';
import Header from '../../components/home/header';
import GroupNavigation from '../../components/home/sogroup';
import Banner from '../../components/home/Banner';
import WorshipInfo from '../../components/home/worshipinfo';
import Gallery from '../../components/home/gallery';

const ChurchHome: React.FC = () => {
  const groups = [
    { id: '1', name: '고등부', imageUrl: '/images/group1.jpg' },
    { id: '2', name: '가브리엘', imageUrl: '/images/group2.jpg' },
    { id: '3', name: '믿음마을', imageUrl: '/images/group3.jpg' },
    { id: '4', name: '중등부', imageUrl: '/images/group4.jpg' },
    { id: '5', name: '청년부', imageUrl: '/images/group5.jpg' },
    { id: '6', name: '주일학교', imageUrl: '/images/group6.jpg' },
  ];

  const galleryImages = [
    { src: '/images/worship1.jpg', alt: '1주차 예배', week: '1주 예배' },
    { src: '/images/worship2.jpg', alt: '2주차 예배', week: '2주 예배' },
    { src: '/images/worship3.jpg', alt: '3주차 예배', week: '3주 예배' },
  ];

  return (
    <div className="bg-background dark:bg-darkBackground min-h-screen font-sans">
      <Header churchName="서현교회" />
      
      <main className="container mx-auto px-4 py-6">
        <GroupNavigation groups={groups} />
        
        <div className="my-6">
          <Banner year="2024" message="소망은 주께 있나이다" verse="시 39:7" />
        </div>
        
        <div className="mb-6">
          <WorshipInfo
            pastorName="이상화 목사님"
            pastorImageUrl="/images/pastor.jpg"
            mainWorshipTime="오전 11:00 (현장예배)"
            wednesdayWorshipTime="오후 7:30"
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4 text-secondary dark:text-white">예배</h2>
          <Gallery images={galleryImages} />
        </div>
      </main>
    </div>
  );
};

export default ChurchHome;