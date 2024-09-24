import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Users, Book, Music, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ChurchDashboard.module.css';

const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <motion.button
      className={styles.themeToggle}
      onClick={() => setIsDark(!isDark)}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

const CarouselItem = ({ icon: Icon, title }) => (
  <motion.div
    className={styles.carouselItem}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={40} className={styles.itemIcon} />
    <div className={styles.itemText}>{title}</div>
  </motion.div>
);

const Carousel = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return Math.max(0, Math.min(newIndex, items.length - 3));
    });
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselHeader}>
        <h2>{title}</h2>
        <motion.button
          className={styles.addButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Plus size={20} />
        </motion.button>
      </div>
      <div className={styles.carouselContent}>
        <motion.button
          className={`${styles.navButton} ${styles.left}`}
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} />
        </motion.button>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.itemsContainer}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
              <CarouselItem key={index} icon={item.icon} title={item.title} />
            ))}
          </motion.div>
        </AnimatePresence>
        <motion.button
          className={`${styles.navButton} ${styles.right}`}
          onClick={() => navigate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentIndex >= items.length - 3}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </div>
  );
};

const ChurchDashboard = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(styles.darkTheme, isDark);
  }, [isDark]);

  const worshipItems = [
    { icon: Music, title: '주일 예배' },
    { icon: Users, title: '청년 예배' },
    { icon: Book, title: '성경 공부' },
    { icon: Music, title: '수요 예배' },
    { icon: Users, title: '새벽 기도' },
  ];

  const groupItems = [
    { icon: Users, title: '청년부' },
    { icon: Users, title: '주부 모임' },
    { icon: Users, title: '남성 모임' },
    { icon: Users, title: '어린이부' },
    { icon: Users, title: '찬양팀' },
  ];

  return (
    <div className={`${styles.dashboard} ${isDark ? styles.darkTheme : ''}`}>
      <motion.div
        className={styles.sidebar}
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <h2 className={styles.sidebarTitle}>서현교회</h2>
        <nav className={styles.sidebarNav}>
          <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>대시보드</motion.a>
          <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>일정</motion.a>
          <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>공지사항</motion.a>
          <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>성경 읽기</motion.a>
        </nav>
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      </motion.div>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1>환영합니다</h1>
          <motion.button
            className={styles.userButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            👤
          </motion.button>
        </header>
        <Carousel title="예배" items={worshipItems} />
        <Carousel title="소그룹" items={groupItems} />
      </div>
    </div>
  );
};

export default ChurchDashboard;