"use client";
import Image from "next/image";
import styles from "./home.module.css";
import SocialMedia from "@/components/social-media";

export default function HomeContent() {

    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage} />
            <div className={styles.textContainer}>
                <p>Olá, meu nome é </p>
                <h1>Rafael Castro</h1>
                <span className={styles.span}>
                    <h3>Desenvolvedor Mobile</h3>
                </span>
                <SocialMedia />
                
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src='/icons/smartphone.gif'
                    width={200}
                    height={200}
                    alt="smartphone"
                    style={{
                        borderRadius: 100
                    }}
                />
            </div>
        </div>
    );
}
