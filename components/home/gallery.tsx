import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import styles from './ChurchDashboard.module.css';

interface GalleryImage {
  src: string;
  alt: string;
  week: string;
}

interface GalleryProps {
  images: GalleryImage[];
  LeftArrowIcon: IconType;
  RightArrowIcon: IconType;
}

const Gallery: React.FC<GalleryProps> = ({ images, LeftArrowIcon, RightArrowIcon }) => (
  <section className={styles.gallery}>
    <h3 className={styles.galleryTitle}>예배</h3>
    <div className={styles.gallerySlider}>
      <LeftArrowIcon className={styles.arrowIcon} />
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image src={image.src} alt={image.alt} width={300} height={200} className={styles.galleryImage} />
            <span className={styles.imageWeek}>{image.week}</span>
            <button className={styles.moreButton}>더보기</button>
          </div>
        ))}
      </div>
      <RightArrowIcon className={styles.arrowIcon} />
    </div>
  </section>
);

export default Gallery;