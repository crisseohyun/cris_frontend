import React from 'react';
import Image from 'next/image';
import styles from './home.css';

interface ProfileProps {
  imageUrl: string;
  name: string;
  role: string;
}

interface ProfileNavigationProps {
  profiles: ProfileProps[];
}

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({ profiles }) => (
  <nav className={styles.profileNavigation}>
    {profiles.map((profile, index) => (
      <div key={index} className={styles.profile}>
        <Image src={profile.imageUrl} alt={profile.name} width={40} height={40} className={styles.profileImage} />
        <span className={styles.profileName}>{profile.name}</span>
      </div>
    ))}
    <button className={styles.addProfileButton}>+</button>
  </nav>
);

export default ProfileNavigation;