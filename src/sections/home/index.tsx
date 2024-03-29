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
            src="https://github.com/rafaelteicas.png"
            fill
            alt="me"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <>
          <span className={styles.span}>
            Rafael
            <LangSelector params={params} />
            Castro
          </span>
          <p style={{fontSize: 10, opacity: 0.5}}>
            (clique na bandeira para trocar a linguagem)
          </p>
        </>
      </div>
      <SocialMedia />
    </section>
  );
}
