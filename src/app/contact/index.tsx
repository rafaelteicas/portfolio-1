import { Button } from '@/components/button';
import styles from './contact.module.css'

export default function Contact() {
  return (
      <div className={styles.container}>
          <div className={styles.formContainer}>
              <form action="" className={styles.form}>
                  <input type="text" placeholder="Nome"></input>
                  <input type="text" placeholder="E-mail"></input>
                  <textarea name="" id="" placeholder="Mensagem"></textarea>
                  <Button title='Enviar'/>
              </form>
          </div>
      </div>
  );
}