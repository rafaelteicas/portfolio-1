'use client';
import Image from 'next/image';
import styles from './home.module.css';
import SocialMedia from '@/components/social-media';
import {getLanguageServer} from '@/infra/translate/translate-server';
import {ParamsProps} from '@/domain/common/params-props';
import {Typewriter} from 'react-simple-typewriter';

export default function HomeContent({params}: ParamsProps) {
  const {translate} = getLanguageServer(params.lang);
  return (
    <section id={styles.home}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>{translate.home.title}</h1>
          <h1>
            <span className={styles.span}>Rafael Castro</span>
          </h1>
          <h1>{translate.home.subtitle}</h1>
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
    </section>
  );
}
