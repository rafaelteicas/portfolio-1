import Image from "next/image";
import styles from "./tech.module.css";
import { Props } from "./types";

export function TechIcons({ icon, title }: Props) {
    return (
        <div className={styles.box}>
            <div className={styles.icon}>
                <Image src={icon} alt={icon} fill />
            </div>
        </div>
    );
}