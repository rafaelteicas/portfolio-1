import {PropsWithChildren} from 'react';
import styles from './text.module.css';
import {CSSProperties} from 'styled-components';

interface Props {
  children: PropsWithChildren['children'];
  title?: boolean;
  style?: CSSProperties;
}

export default function Text({children, title, style}: Props) {
  return (
    <p
      className={title ? styles.titleContainer : styles.textContainer}
      style={style}>
      {children}
    </p>
  );
}
