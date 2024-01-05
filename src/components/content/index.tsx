"use client"
import styles from './content.module.css'
import Card from '../card'

export default function Content() {
  return (
      <div className={styles.container}>
          <Card
              src="/icons/about.png"
              alt="Tecnologias"
              title="Sobre"
              size={200}
          />
          <Card
              src="/icons/tech.png"
              alt="Tecnologias"
              title="Tecnologias"
              size={200}
          />
          <Card
              src="/icons/tech.png"
              alt="Projetos"
              title="Projetos"
              size={200}
          />
      </div>
  );
}