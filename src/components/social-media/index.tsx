import Image from 'next/image';
import styles from './social-media.module.css';

const ICONS_SIZE = 40;

const socialMediaMap = [
  {
    src: '/icons/linkedin.png',
    alt: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafacastro21/',
  },
  {
    src: '/icons/github.png',
    alt: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafacastro21/',
  },
  {
    src: '/icons/youtube.png',
    alt: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafacastro21/',
  },
];

export default function SocialMedia() {
  const socialMedias = socialMediaMap;

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
