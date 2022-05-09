import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function ThirdItem ({ title, img }) {
  return (
    <div className={`${styles.thirdItemContainer}`}>
      <div className={styles.imageContainer}>
        <Image layout='intrinsic' src={img} alt='Sample' />
      </div>
      <h3 className={styles.subtitle}>{title}</h3>
    </div>
  )
}
