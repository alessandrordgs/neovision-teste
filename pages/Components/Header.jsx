/* eslint-disable @next/next/no-img-element */

import styles from '../../styles/components/Header.module.css'
import SectionImg from './SectionImg'

const navigation = ['Funcionalidades', 'Contato']

export default function Header(){
  return(
    
    <header className={styles.header}>
      <div className={styles.headerNav}>
        <div className={styles.containerLogo}>
          <img src="/neovisionLogo.svg" alt="" />
        </div>
        <nav>
            <ul className={styles.nav}> 
               {navigation.map((navItem) => {
               return (
                  <li key={navItem}>
                     <a href="#">
                       <p>{navItem.toUpperCase()}</p>
                     </a>
                  </li>
               )
               }
            )
            }
               <li>
                  <img src="/facebookLogo.svg" alt="" />
               </li>
            </ul>
         </nav>
      </div>

      <SectionImg/>
   </header>
  )
}