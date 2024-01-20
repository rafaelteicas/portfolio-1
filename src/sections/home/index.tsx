'use client';
import Image from 'next/image';
import styles from './home.module.css';
import SocialMedia from '@/components/social-media';
import {ParamsProps} from '@/domain/common/params-props';
import Text from '@/components/text';
import {LangSelector} from '@/components/lang-selector';

export default function HomeContent({params}: ParamsProps) {
  return (
    <section id={styles.home}>
      <div className={styles.container}>
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
        <div className={styles.textContainer}>
          <h1>
            <span className={styles.span}>Rafael Castro</span>
            <LangSelector params={params} />
          </h1>
        </div>
      </div>
      <SocialMedia />
    </section>
  );
}
