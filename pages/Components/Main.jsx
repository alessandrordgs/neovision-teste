/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/components/Main.module.css'

const features = ['Funcionalidade 1', 'Funcionalidade 2'," Funcionalidade 3"] 

export default function Main(){
  return (
   <main>
      <div>
        <h1>NeoVision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sint necessitatibus. Natus sequi hic cum impedit facere harum distinctio tempora. Mollitia ratione dolorem consequuntur perspiciatis ipsum officia incidunt consequatur iure?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sint necessitatibus. Natus sequi hic cum impedit facere harum distinctio tempora. Mollitia ratione dolorem consequuntur perspiciatis ipsum officia incidunt consequatur iure?</p>
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