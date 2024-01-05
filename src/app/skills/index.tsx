"use client"
import styles from './skills.module.css'
import { mapIcons } from './map-icons';
import { SkillsIcons } from './skills-icons';

export default function Tech() {
    return (
        <div className={styles.container} id='skills'>
            <h1>Habilidades</h1>
            <div className={styles.cards}>
                {mapIcons.map(({ icon, title }) => (
                    <SkillsIcons title={title} icon={icon} key={title}  />
                ))}
            </div>
        </div>
    );
}