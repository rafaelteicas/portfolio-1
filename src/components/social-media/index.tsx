import Image from 'next/image';
import styles from './social-media.module.css';
import {useRouter} from 'next/navigation';

const ICONS_SIZE = 40;

export default function SocialMedia() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Image
        src="/icons/linkedin.png"
        alt="LinkedIn"
        width={ICONS_SIZE}
        height={ICONS_SIZE}
        onClick={() => router.push('https://www.linkedin.com/in/rafacastro21/')}
      />
      <Image
        src="/icons/github.png"
        alt="GitHub"
        width={ICONS_SIZE}
        height={ICONS_SIZE}
        onClick={() => router.push('https://github.com/rafaelteicas')}
      />
      <Image
        src="/icons/youtube.png"
        alt="YouTube"
        width={ICONS_SIZE}
        height={ICONS_SIZE}
        onClick={() =>
          router.push(
            'https://www.youtube.com/channel/UCYoctnFPGzNN-q1_Z-JyFGQ',
          )
        }
      />
    </div>
  );
}
