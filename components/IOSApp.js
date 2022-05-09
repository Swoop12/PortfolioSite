import Image from 'next/image'
import styles from '../styles/Home.module.css'

import appStoreIcon from '../public/appstore.svg'

export default function IOSApp ({ title, icon, description, appStoreLink }) {
  return (
    <div
      className={`${styles.heroContainer} ${styles.hoverContainer} ${styles.iOSApp}`}
    >
      <Image width={250} height={250} src={icon} />
      <h3>{title}</h3>
      <a href={appStoreLink}>
        <Image src={appStoreIcon} />
      </a>
      <p>{description}</p>
    </div>
  )
}
