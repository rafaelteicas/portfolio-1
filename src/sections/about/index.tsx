'use client';
import {getLanguageServer} from '@/infra/translate/translate-server';
import styles from './about.module.css';
import Text from '@/components/text';
import {ParamsProps} from '@/domain/common/params-props';

export default function About({params}: ParamsProps) {
  const {translate} = getLanguageServer(params.lang);
  return (
    <section id={styles.about}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Text title>{translate.about.title}</Text>
          <Text>
            <div dangerouslySetInnerHTML={{__html: translate.about.p1}} />
          </Text>
          <Text>
            <div dangerouslySetInnerHTML={{__html: translate.about.p2}} />
          </Text>
          <Text>
            <div dangerouslySetInnerHTML={{__html: translate.about.p3}} />
          </Text>
        </div>
      </div>
    </section>
  );
}
