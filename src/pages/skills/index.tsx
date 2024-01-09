'use client';
import styles from './skills.module.css';
import {mapIcons} from './map-icons';
import {SkillsCard} from '@/components/skill-card';

export default function Tech() {
  return (
    <div className={styles.container} id="skills">
      <b>HABILIDADES</b>
      <div className={styles.cards}>
        {mapIcons.map(({title}) => (
          <SkillsCard title={title} key={title} />
        ))}
      </div>
    </div>
  );
}
