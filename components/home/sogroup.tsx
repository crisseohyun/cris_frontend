import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './home.css';

interface GroupProps {
  id: string;
  name: string;
  imageUrl: string;
}

interface GroupNavigationProps {
  groups: GroupProps[];
}

const GroupNavigation: React.FC<GroupNavigationProps> = ({ groups }) => (
  <nav className={styles.groupNavigation}>
    <button className={styles.navArrow}>←</button>
    {groups.map((group) => (
      <Link href={`/group/${group.id}`} key={group.id} className={styles.groupLink}>
        <Image src={group.imageUrl} alt={group.name} width={40} height={40} className={styles.groupImage} />
        <span className={styles.groupName}>{group.name}</span>
      </Link>
    ))}
    <button className={styles.navArrow}>→</button>
    <button className={styles.addGroupButton}>+</button>
  </nav>
);

export default GroupNavigation;