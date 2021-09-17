/* eslint-disable @next/next/no-img-element */

import styles from '../../styles/components/Header.module.css'

const navigation = ['Funcionalidades', 'Contato']

export default function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.containerLogo}>
         <img src="/neovisionLogo.svg" alt="" />
      </div>
      <nav>
         <ul className={styles.nav}> 
            {navigation.map((navItem) => {
              return (
                <li key={navItem}><p>{navItem.toUpperCase()}</p></li>
              )
            }
           )
         }
            <li>
               <img src="/facebookLogo.svg" alt="" />
            </li>
         </ul>
      </nav>
   </header>
  )
}