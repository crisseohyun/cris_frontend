import React from 'react';
import { IconType } from 'react-icons';
import styles from './home.css';

interface HeaderProps {
  MenuIcon: IconType;
  SettingsIcon: IconType;
  churchName: string;
}

const Header: React.FC<HeaderProps> = ({ MenuIcon, SettingsIcon, churchName }) => (
  <header className={styles.header}>
    <MenuIcon className={styles.menuIcon} />
    <h1 className={styles.churchName}>{churchName}</h1>
    <SettingsIcon className={styles.settingsIcon} />
  </header>
);

export default Header;