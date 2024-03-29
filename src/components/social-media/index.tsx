import Image from 'next/image';
import styles from './social-media.module.css';

const ICONS_SIZE = 30;

const socialMediaMap = [
  {
    src: '/icons/social-media/linkedin.svg',
    alt: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafacastro21/',
  },
  {
    src: '/icons/social-media/github.svg',
    alt: 'Github',
    url: 'https://github.com/rafaelteicas/',
  },
  {
    src: '/icons/social-media/youtube.svg',
    alt: 'Youtube',
    url: 'https://www.youtube.com/channel/UCYoctnFPGzNN-q1_Z-JyFGQ',
  },
];

export default function SocialMedia() {
  return (
    <div className={styles.container}>
      {socialMediaMap.map(item => (
        <a target="_blank" href={item.url} key={item.alt}>
          <Image
            src={item.src}
            alt={item.alt}
            width={ICONS_SIZE}
            height={ICONS_SIZE}
          />
        </a>
      ))}
    </div>
  );
}
