"use client";
import Image from "next/image";
import styles from "./about.module.css";
import SocialMedia from "@/components/social-media";

export default function About() {

    return (
        <div className={styles.container} id="about">
            <div className={styles.imageContainer}>
                <Image
                    src="/images/me.jpg"
                    width={300}
                    height={300}
                    alt="me"
                    style={{
                        objectFit: 'cover'
                    }}
                />
                </div>
            <div className={styles.textContainer}>
                <h1>Sobre mim</h1>
                <p>
                    Me chamo Rafael Teixeira de Castro, tenho 21 anos e sou
                    desenvolvedor mobile! Atualmente minha stack principal é o
                    React Native, mas estudo o desenvolvimento nativo com o
                    Kotlin. Também atuo como desenvolvedor full stack utilizando
                    o NodeJs no backend, e o NextJs no front end.
                </p>
            </div>
        </div>
    );
}
