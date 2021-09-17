import Image from 'next/image'
import styles from '../../styles/components/SectionImg.module.css'
export default function SectionImg(){
  return (
    <section className={styles.section}>
      <div>
          <Image src="/manAndBoxWithAPhone.svg" alt="Um homem do lado de uma estante e uma pilha de caixas" width={500} height={500}/>
      </div>
      
      <div>
        <p>Reconhecimento de imagem com</p>
        <h1>Inteligência Artificial</h1>
      </div>
   </section>
  )
}