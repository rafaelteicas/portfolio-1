import Image from "next/image";
import styles from "./skills.module.css";
import { Props } from "./types";

export function SkillsIcons({ icon, title }: Props) {
    return (
        <div className={styles.box}>
            <div className={styles.icon}>
                <Image src={icon} alt={icon} width={50} height={50} />
            </div>
        </div>
    );
}