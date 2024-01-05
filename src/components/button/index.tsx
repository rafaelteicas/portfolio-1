import styles from './button.module.css'

interface Props {
  title: string
  onClick: () => void
}

export function Button({ title, onClick }: Props) {
    return (
        <button className={styles.container} onClick={onClick}>
            {title}
        </button>
    );
}