import React from 'react';
import { IconType } from 'react-icons';
import styles from './home.css';

interface WorshipInfoProps {
  CalendarIcon: IconType;
  ClockIcon: IconType;
  LocationIcon: IconType;
  SunIcon: IconType;
  mainWorshipTime: string;
  otherWorshipTimes: string[];
}

const WorshipInfo: React.FC<WorshipInfoProps> = ({
  CalendarIcon, ClockIcon, LocationIcon, SunIcon,
  mainWorshipTime, otherWorshipTimes
}) => (
  <section className={styles.worshipInfo}>
    <div className={styles.mainWorshipTime}>
      <CalendarIcon className={styles.icon} />
      <span>주일예배</span>
      <ClockIcon className={styles.icon} />
      <span>{mainWorshipTime}</span>
    </div>
    <div className={styles.otherWorshipTimes}>
      {otherWorshipTimes.map((time, index) => (
        <div key={index} className={styles.worshipTime}>
          <span>{time}</span>
        </div>
      ))}
    </div>
    <div className={styles.locationInfo}>
      <LocationIcon className={styles.icon} />
      <span>오시는 길</span>
    </div>
    <div className={styles.weatherInfo}>
      <SunIcon className={styles.icon} />
      <span>날씨정보</span>
    </div>
  </section>
);

export default WorshipInfo;