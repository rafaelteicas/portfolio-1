"use client"
import { Button } from '@/components/button';
import styles from './projects.module.css'
import Image from 'next/image'
import { Tilt } from 'react-tilt';
import Card from '@/components/card';

export default function Projects() {
    const defaultOptions = {
        reverse:        false,
        max:            15,
        perspective:    500,
        scale:          1.0,
        speed:          500,
    }
    return (
        <>
            <h1 style={{ marginBottom: 20 }}>Projetos</h1>
            <Tilt options={defaultOptions}>
                <div className={styles.container}>
                    <Card
                        src="/images/vconnect.png"
                        alt="vconnect"
                        title="VConnect App"
                        desc="O VConnect é um aplicativo que permite que você
                                encontre pessoas para jogar em qualquer lugar,
                                basta fazer uma postagem, ou enviar uma mensagem
                                para que alguém te encontre, de acordo com seu
                                nível e suas habilidades."
                    />
                </div>
            </Tilt>
        </>
    );
}