import Image from 'next/image'

import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import mimoji from '../public/mimoji.png'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home () {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.hStack}>
          <div className={styles.heroContainer}>
            <Image width={300} height={300} src={mimoji} />
            <div className={styles.titleBox}>
              <h1 className={styles.title}>Hi I&apos;m Trevor</h1>
              <p className={styles.description}>👨🏼‍💻 80% Developer</p>
              <p className={styles.description}>🎨 20% Designer</p>
            </div>
          </div>
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='projects'>
          <Projects />
        </div>
      </div>
    </Layout>
  )
}
