import Image from 'next/image';
import styles from './card.module.css'
import { Tilt } from "react-tilt";

interface Props {
  src: string
  alt: string
  title: string
  desc: string
}

export default function Card({src, alt,desc,title}: Props) {
  const defaultOptions = {
      reverse: false,
      max: 15,
      perspective: 500,
      scale: 1.0,
      speed: 500,
  };
  return (
      <Tilt options={defaultOptions}>
          <div className={styles.box} id="card" data-tilt>
              <Image
                  src={src}
                  alt={alt}
                  height={720}
                  width={1080}
                  style={{
                      width: "90%",
                      height: "30%",
                      borderRadius: 20,
                  }}
              />
              <div className={styles.boxText}>
                <h3>{title}</h3>
                  <p>
                      {desc}
                  </p>
              </div>
          </div>
      </Tilt>
  );
}