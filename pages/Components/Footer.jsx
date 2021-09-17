import { useState } from "react";

import styles from '../../styles/components/Footer.module.css'

export default function Footer(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')

  function handleForm(e){
     e.preventDefault();
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h1>
            Quer conhecer mais sobre o Neovision?
        </h1>

        <form onSubmit={handleForm}>
          <div>
            <label className={styles.srOnly} htmlFor="name">Nome</label>
            <input className={styles.input} type="text" onChange={e => setName(e.target.value)} placeholder="Nome" id="name"/>
          </div>
      
          <div>
            <label className={styles.srOnly} htmlFor="email">Email</label>
            <input className={styles.input} type="email" onChange={e => setEmail(e.target.value)} id="email" placeholder="E-mail"/>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className={styles.copyright}>
         <p>&copy;2019 - Neovision. Todos os diretos reservados</p>
      </div>
    </footer>
  )
}