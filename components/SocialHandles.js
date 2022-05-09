import Image from 'next/image'

import github from '../public/SocialLogos/github.png'
import linkedin from '../public/SocialLogos/linkedin.png'
import medium from '../public/SocialLogos/medium.png'
import styles from '../styles/Home.module.css'

export default function SocialHandles ({ previewMode }) {
  const socialHandleSize = 32
  return (
    <div className={styles.handlesContainer}>
      <a href='https://www.linkedin.com/in/trevoradcock/'>
        <Image
          width={socialHandleSize}
          height={socialHandleSize}
          className={styles.headerImg}
          src={linkedin}
          alt='LinkedIn'
        />
      </a>
      <a href='https://github.com/Swoop12'>
        <Image
          width={socialHandleSize}
          height={socialHandleSize}
          className={styles.headerImg}
          src={github}
          alt='Github'
        />
      </a>
      <a href='https://medium.com/@trevoradcock_94151'>
        <Image
          width={socialHandleSize}
          height={socialHandleSize}
          className={styles.headerImg}
          src={medium}
          alt='Medium'
        />
      </a>
    </div>
  )
}
