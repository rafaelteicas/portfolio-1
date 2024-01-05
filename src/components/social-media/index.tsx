import Image from 'next/image'
import styles from './social-media.module.css'

const ICONS_SIZE = 40

export default function SocialMedia() {
  return (
      <div className={styles.container}>
          <Image
              src="/images/linkedin.png" alt="LinkedIn" width={ICONS_SIZE} height={ICONS_SIZE} />
          <Image src="/images/github.png" alt="GitHub" width={ICONS_SIZE} height={ICONS_SIZE} />
          <Image src="/images/youtube.png" alt="YouTube" width={ICONS_SIZE} height={ICONS_SIZE} />
      </div>
  );
}