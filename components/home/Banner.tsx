import React from 'react';
import styles from './home.css';

interface BannerProps {
  year: string;
  message: string;
  verse: string;
}

const Banner: React.FC<BannerProps> = ({ year, message, verse }) => (
  <section className={styles.banner}>
    <span className={styles.bannerYear}>{year} 표어</span>
    <h2 className={styles.bannerMessage}>{message}</h2>
    <span className={styles.bannerVerse}>{verse}</span>
  </section>
);

export default Banner;