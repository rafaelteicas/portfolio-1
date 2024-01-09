'use client';
import Image from 'next/image';
import styles from './home.module.css';
import SocialMedia from '@/components/social-media';

export default function HomeContent() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.backgroundImage} />
      <div className={styles.textContainer}>
        <h1>Olá, me chamo</h1>
        <h1>
          <span className={styles.span}>Rafael Castro</span>
        </h1>
        <h1>Desenvolvedor Mobile</h1>
        <SocialMedia />
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/images/me.jpg"
          fill
          alt="me"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}
