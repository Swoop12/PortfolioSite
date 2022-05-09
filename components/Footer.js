import styles from '../styles/Home.module.css'
import SocialHandles from './SocialHandles'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBG} />
      <SocialHandles />
    </div>
  )
}
