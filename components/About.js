import styles from '../styles/Home.module.css'
import ThirdItem from './ThirdItem'

import appStore from '../public/AppStore.png'
import react from '../public/react.png'
import ethereum from '../public/ethereum.png'
import SectionHeader from './SectionHeader'

export default function About () {
  return (
    <div>
      <SectionHeader title='👨🏼‍💻 What I Do' />
      <div className={styles.hStack}>
        <ThirdItem title={'iOS'} img={appStore} />
        <ThirdItem title={'Web'} img={react} />
        <ThirdItem title={'Blockchain'} img={ethereum} />
      </div>
      <p className={styles.paragraph}>
        I am thoroughly enthralled by the ingenuity, creativity, and problem
        solving involved in software development. I believe I can add instant
        value to any iOS, Web or blockchain project, and (with enough time) I
        have enough grit to figure (almost) any technology out. While I&apos;m
        not actively being a tech fan-boy, you will likely find me at any decent
        concert or on an outdoor adventure I didn&apos;t pack properly for.
        Beyond that, I enjoy light coffee and dark beer and would love to have a
        cup of either with you.
      </p>
    </div>
  )
}
