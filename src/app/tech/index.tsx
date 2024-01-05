import styles from './tech.module.css'
import { TechIcons } from './tech-icons';
import { mapIcons } from './map-icons';

export default function Tech() {
    return (
        <div className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.cards}>
                {mapIcons.map(({ icon, title }) => (
                    <TechIcons title={title} icon={icon} key={title} />
                ))}
            </div>
        </div>
    );
}