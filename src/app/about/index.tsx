"use client";
import Image from "next/image";
import styles from "./about.module.css";
import SocialMedia from "@/components/social-media";

export default function About() {
    function handleOnClick() {
        console.log("clicou");
    }
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p>Olá, meu nome é </p>
                <h1>Rafael Castro</h1>
                <span className={styles.span}>
                    <h3>Desenvolvedor Mobile</h3>
                </span>
            <SocialMedia />
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.backgroundImage} />
                <Image
                    src="/images/me.jpg"
                    alt=""
                    width={150}
                    height={150}
                    style={{
                        borderRadius: "50%",
                    }}
                />
            </div>
        </div>
    );
}
