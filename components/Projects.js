import SectionHeader from './SectionHeader'
import styles from '../styles/Home.module.css'
import IOSApp from './IOSApp'
import WebProject from './WebProject'

import yolc from '../public/YolcIcon.png'
import momstrong from '../public/Momstrong.png'
import bombs from '../public/Bombs.png'
import dddc from '../public/DDDC.png'
import sayc from '../public/sayc.png'

export default function Projects () {
  return (
    <div>
      <SectionHeader title='🛠 Personal Projects' />
      <h4 className={styles.iOSHeader}> iOS</h4>
      <div className={styles.hStack}>
        <IOSApp
          title='Yolc'
          icon={yolc}
          description='The App that makes Macro Tracking super simple.'
          appStoreLink='https://apps.apple.com/us/app/yolc/id1620260363'
        />
        <IOSApp
          title='Momstrong Move'
          icon={momstrong}
          description='A workout app for Moms'
          appStoreLink='https://apps.apple.com/us/app/momstrong-move/id1447765301'
        />
      </div>
      <h4 className={styles.webHeader}>🌐 Web & Blockchain</h4>
      <div className={styles.webProjectsContainer}>
        <WebProject
          title='Bombheads'
          img={bombs}
          description='The next financial bubble coded directly into an NFT.'
          link='https://bombheadsnft.com'
        />
        <WebProject
          title='Dull Droid Dinghy Club'
          img={dddc}
          description='An NFT Project just like the Bored Ape Yacht Club, just much worse.'
          link='https://dulldroiddinghy.club'
        />
        <WebProject
          title='Stolen Ape Yacht Club'
          img={sayc}
          description='Really just trying to prove a point about NFTs here'
          link='https://allvnoc.com'
        />
      </div>
    </div>
  )
}
