import Image from 'next/image'
import styles from './social-media.module.css'

const ICONS_SIZE = 40

export default function SocialMedia() {
  return (
      <div className={styles.container}>
          <Image src="/icons/linkedin.png" alt="LinkedIn" width={ICONS_SIZE} height={ICONS_SIZE} />
          <Image src="/icons/github.png" alt="GitHub" width={ICONS_SIZE} height={ICONS_SIZE} />
          <Image src="/icons/youtube.png" alt="YouTube" width={ICONS_SIZE} height={ICONS_SIZE} />
      </div>
  );
}