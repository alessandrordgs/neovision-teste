/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/components/Main.module.css'

const features = ['Funcionalidade 1', 'Funcionalidade 2'," Funcionalidade 3"] 

export default function Main(){
  return (
   <main>
      <div className={styles.mainText}>
        <h1>NeoVision</h1>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria
           tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
           quando um impressor desconhecido pegou uma bandeja de tipos e os
           embaralhou para fazer um livro de modelos de tipos.</p>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria
           tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos.</p>
     </div>
     <div className={styles.mainImg}>
        <img src="backgroundImgMain.svg" alt="" />
        <div className={styles.text}>
          <ul>
             {features.map((feat)=> {
             return(
               <li key={feat}>
                 <img src="/checkCircle.svg" alt="" />
                 <p>{feat}</p>
                 </li>
             )
             })}
          </ul>
        </div>
     </div>
     
   </main>
    
  )
}