import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function WebProject ({
  title,
  subtitle,
  description,
  img,
  link
}) {
  return (
    <a href={link}>
      <div className={`${styles.hoverContainer} ${styles.webProject}`}>
        <div>
          <Image objectFit='cover' width={600} height={350} src={img} />
        </div>
        <div className={styles.blogCardTextContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </a>
  )
}
