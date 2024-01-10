'use client';
import styles from './about.module.css';
import Text from '@/components/text';
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Text title>Um pouco sobre mim</Text>
        <Text>
          Me chamo Rafael Teixeira de Castro, sou <b>Desenvolvedor Mobile</b>,
          mas atuo também no desenvolvimento Back-End e Front-End.
        </Text>
        <Text>
          Iniciei no mundo da programação aos 12 anos construindo pequenos
          layouts em HTML/CSS para jogos online, mas acabei deixando de lado.
          Aos 18 anos entrei na federal em Engenharia de Produção, mas percebi
          que a minha paixão era a programação, então aos 20 anos mudei para o
          curso de
          <b> Engenharia de Software</b>, no qual curso atualmente.
        </Text>
        <Text>
          Atualmente minha principal stack é o <b>Typescript</b>, seja no mobile
          com <b>React Native</b> ou no back-end com o <b>Node</b>
        </Text>
      </div>
    </div>
  );
}
