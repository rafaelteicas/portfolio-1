import {PropsWithChildren} from 'react';
import styles from './text.module.css';

interface Props {
  children: PropsWithChildren['children'];
  title?: boolean;
}

export default function Text({children, title}: Props) {
  return (
    <div className={title ? styles.titleContainer : styles.textContainer}>
      {children}
    </div>
  );
}
