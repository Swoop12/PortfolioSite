import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import SocialHandles from './SocialHandles'

export default function Header () {
  return (
    <div className={styles.navBackground}>
      <div className={styles.headerContainer}>
        <div className={styles.linksContainer}>
          <Link href='#about'>
            <a className={styles.headerLink}>About</a>
          </Link>
          <Link href='#projects'>
            <a className={styles.headerLink}>Projects</a>
          </Link>
          <a
            href='/resume.pdf'
            download='TrevorAdcockResume.pdf'
            className={styles.headerLink}
          >
            Resume
          </a>
        </div>
        <div>
          <SocialHandles />
        </div>
      </div>
    </div>
  )
}
