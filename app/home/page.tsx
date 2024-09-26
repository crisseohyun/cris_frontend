import React from 'react';
import Header from '../../components/home/header';
import GroupNavigation from '../../components/home/sogroup';
import ProfileNavigation from '../../components/home/profile';
import Banner from '../../components/home/Banner';
import WorshipInfo from '../../components/home/worshipinfo';
import Gallery from '../../components/home/gallery';
import { FiMenu, FiSettings, FiCalendar, FiClock, FiMapPin, FiSun } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from '../../components/home/home.css';

const ChurchHome: React.FC = () => {
  const groups = [
    { id: '1', name: '고등부', imageUrl: '/group1.jpg' },
    { id: '2', name: '믿음마을', imageUrl: '/group2.jpg' },
    { id: '3', name: '가브리엘', imageUrl: '/group3.jpg' },
    { id: '4', name: '수요예배', imageUrl: '/group4.jpg' },
    { id: '5', name: '학사', imageUrl: '/group5.jpg' },
  ];

  const profiles = [
    { imageUrl: '/profile1.jpg', name: '고등부', role: '서기' },
    { imageUrl: '/profile2.jpg', name: '믿음마을', role: '부회장' },
    { imageUrl: '/profile3.jpg', name: '가브리엘', role: '테너' },
    { imageUrl: '/profile4.jpg', name: '수요예배', role: '성도' },
    { imageUrl: '/profile5.jpg', name: '학사', role: '학사생' },
  ];

  const galleryImages = [
    { src: '/worship1.jpg', alt: '1주차 예배', week: '1주 예배' },
    { src: '/worship2.jpg', alt: '2주차 예배', week: '2주 예배' },
    { src: '/worship3.jpg', alt: '3주차 예배', week: '3주 예배' },
  ];

  return (
    <div className={styles.dashboard}>
      <Header MenuIcon={FiMenu} SettingsIcon={FiSettings} churchName="서현교회" />
      <main>
        <GroupNavigation groups={groups} />
        <ProfileNavigation profiles={profiles} />
        <Banner year="2024" message="소망은 주께 있나이다" verse="시 39:7" />
        <WorshipInfo
          CalendarIcon={FiCalendar}
          ClockIcon={FiClock}
          LocationIcon={FiMapPin}
          SunIcon={FiSun}
          mainWorshipTime="오전 11:00 (현장예배)"
          otherWorshipTimes={["1부 예배: 오전 9:00", "2부 예배: 오전 11:00", "수요 예배: 오후 7:30"]}
        />
        <Gallery
          images={galleryImages}
          LeftArrowIcon={IoIosArrowBack}
          RightArrowIcon={IoIosArrowForward}
        />
      </main>
    </div>
  );
};

export default ChurchHome;